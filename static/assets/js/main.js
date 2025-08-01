/**
* Template Name: TheEvent
* Updated: Sep 18 2023 with Bootstrap v5.3.2
* Template URL: https://bootstrapmade.com/theevent-conference-event-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 20
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      
      // Close all other dropdowns first
      const dropdowns = document.querySelectorAll('.navbar .dropdown-active')
      dropdowns.forEach(dropdown => {
        // Skip the current dropdown being clicked
        if (dropdown !== this.nextElementSibling) {
          dropdown.classList.remove('dropdown-active')
        }
      })
      
      // Toggle the clicked dropdown
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * FAQ accordion & toggle icons
   */
  document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-list .collapsed');
    
    // Set up event listeners for bootstrap collapse events
    const faqCollapseElements = document.querySelectorAll('.faq-list .collapse');
    faqCollapseElements.forEach(collapseEl => {
      collapseEl.addEventListener('show.bs.collapse', function() {
        const question = this.previousElementSibling;
        question.classList.remove('collapsed');
        const downIcon = question.querySelector('.icon-show');
        const upIcon = question.querySelector('.icon-close');
        if (downIcon) downIcon.style.display = 'none';
        if (upIcon) upIcon.style.display = 'inline-block';
      });
      
      collapseEl.addEventListener('hide.bs.collapse', function() {
        const question = this.previousElementSibling;
        question.classList.add('collapsed');
        const downIcon = question.querySelector('.icon-show');
        const upIcon = question.querySelector('.icon-close');
        if (downIcon) downIcon.style.display = 'inline-block';
        if (upIcon) upIcon.style.display = 'none';
      });
    });
    
    // Initial setup for icons
    faqItems.forEach(item => {
      const downIcon = item.querySelector('.icon-show');
      const upIcon = item.querySelector('.icon-close');
      if (downIcon) downIcon.style.display = 'inline-block';
      if (upIcon) upIcon.style.display = 'none';
    });
  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Gallery Slider
   */
  new Swiper('.gallery-slider', {
    speed: 400,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      575: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 20
      }
    }
  });

  /**
   * Initiate gallery lightbox 
   */
  const galleryLightbox = GLightbox({
    selector: '.gallery-lightbox'
  });

  /**
   * Buy tickets select the ticket type on click
   */
  on('show.bs.modal', '#buy-ticket-modal', function(event) {
    select('#buy-ticket-modal #ticket-type').value = event.relatedTarget.getAttribute('data-ticket-type')
  })

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 300,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

   // CFP Modal initialization
   window.addEventListener('load', function() {
     const cfpModal = document.getElementById('cfpModal');
     if (cfpModal) {
       const bsModal = new bootstrap.Modal(cfpModal);
       bsModal.show();
     }
   });
   
})()

document.addEventListener('DOMContentLoaded', function() {
  // Initialize gallery images error handling
  const galleryImages = document.querySelectorAll('.venue-gallery img');
  galleryImages.forEach(img => {
    img.onerror = function() {
      this.onerror = null;
      // Use a data URI for the placeholder image instead of an external file
      this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2YwZjBmMCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM4ODg4ODgiPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48cGF0aCBkPSJNNTAsNTAgTDE1MCwxNTAgTTE1MCw1MCBMNTAsMTUwIiBzdHJva2U9IiM4ODg4ODgiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==';
      // Add a class to indicate error for styling purposes
      this.classList.add('img-load-error');
      // Log error without exposing sensitive information
      console.error('Image failed to load: ' + this.alt);
    };
  });

  // Initialize GLightbox with options
  const lightbox = GLightbox({
    selector: '.glightbox',
    touchNavigation: true,
    loop: true,
    autoplayVideos: true
  });
});