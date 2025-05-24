/**
* PHP Email Form Validation - v3.6
* URL: https://bootstrapmade.com/php-email-form/
* Author: BootstrapMade.com
*/
(function () {
  "use strict";

  let forms = document.querySelectorAll('.php-email-form');

  forms.forEach( function(e) {
    e.addEventListener('submit', function(event) {
      event.preventDefault();

      let thisForm = this;

      let action = thisForm.getAttribute('action');
      let recaptcha = thisForm.getAttribute('data-recaptcha-site-key');
      
      if( ! action ) {
        displayError(thisForm, 'The form action property is not set!');
        return;
      }
      thisForm.querySelector('.loading').classList.add('d-block');
      thisForm.querySelector('.error-message').classList.remove('d-block');
      thisForm.querySelector('.sent-message').classList.remove('d-block');

      // Validate form inputs before submission
      const name = thisForm.querySelector('input[name="name"]');
      const email = thisForm.querySelector('input[name="email"]');
      const subject = thisForm.querySelector('input[name="subject"]');
      const message = thisForm.querySelector('textarea[name="message"]');
      
      // Basic input validation
      if (name && !name.value.trim()) {
        displayError(thisForm, 'Please enter your name');
        return;
      }
      
      if (email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
          displayError(thisForm, 'Please enter a valid email address');
          return;
        }
      }
      
      if (subject && !subject.value.trim()) {
        displayError(thisForm, 'Please enter a subject');
        return;
      }
      
      if (message && !message.value.trim()) {
        displayError(thisForm, 'Please enter your message');
        return;
      }
      
      let formData = new FormData(thisForm);

      // Sanitize form data
      for (let pair of formData.entries()) {
        if (typeof pair[1] === 'string') {
          // Basic sanitization - remove script tags
          const sanitized = pair[1].replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
          formData.set(pair[0], sanitized);
        }
      }

      if (recaptcha) {
        if(typeof grecaptcha !== "undefined") {
          grecaptcha.ready(function() {
            try {
              grecaptcha.execute(recaptcha, {action: 'php_email_form_submit'})
              .then(token => {
                formData.set('recaptcha-response', token);
                php_email_form_submit(thisForm, action, formData);
              })
            } catch(error) {
              displayError(thisForm, 'reCaptcha error');
              console.error('reCaptcha error:', error);
            }
          });
        } else {
          displayError(thisForm, 'The reCaptcha API is not available');
          console.error('The reCaptcha javascript API url is not loaded!');
        }
      } else {
        php_email_form_submit(thisForm, action, formData);
      }
    });
  });

  function php_email_form_submit(thisForm, action, formData) {
    fetch(action, {
      method: 'POST',
      body: formData,
      headers: {'X-Requested-With': 'XMLHttpRequest'}
    })
    .then(response => {
      if( response.ok ) {
        return response.text();
      } else {
        throw new Error(`${response.status} ${response.statusText} ${response.url}`); 
      }
    })
    .then(data => {
      thisForm.querySelector('.loading').classList.remove('d-block');
      if (data.trim() == 'OK') {
        thisForm.querySelector('.sent-message').classList.add('d-block');
        thisForm.reset(); 
      } else {
        throw new Error(data ? data : 'Form submission failed and no error message returned from: ' + action); 
      }
    })
    .catch((error) => {
      // Generic error message for users
      displayError(thisForm, 'An error occurred while sending the message. Please try again later.');
      // Detailed error for developers in console
      console.error('Form submission error:', error);
    });
  }

  function displayError(thisForm, error) {
    thisForm.querySelector('.loading').classList.remove('d-block');
    // Sanitize error message to prevent XSS
    const sanitizedError = typeof error === 'string' ?
      error.replace(/</g, '&lt;').replace(/>/g, '&gt;') :
      'An error occurred';
    thisForm.querySelector('.error-message').innerHTML = sanitizedError;
    thisForm.querySelector('.error-message').classList.add('d-block');
  }

})();
