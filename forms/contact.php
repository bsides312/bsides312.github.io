<?php
  /**
  * Requires the "PHP Email Form" library
  * The "PHP Email Form" library is available only in the pro version of the template
  * The library should be uploaded to: vendor/php-email-form/php-email-form.php
  * For more info and help: https://bootstrapmade.com/php-email-form/
  */

  // Use a proper email address for receiving form submissions
  $receiving_email_address = 'security@bsides312.org';

  if( file_exists($php_email_form = '../assets/vendor/php-email-form/php-email-form.php' )) {
    include( $php_email_form );
  } else {
    die( 'Unable to load the "PHP Email Form" Library!');
  }

  $contact = new PHP_Email_Form;
  $contact->ajax = true;
  
  $contact->to = $receiving_email_address;
  // Sanitize user inputs to prevent XSS attacks
  $contact->from_name = htmlspecialchars(strip_tags(trim($_POST['name'])), ENT_QUOTES, 'UTF-8');
  $contact->from_email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
  $contact->subject = htmlspecialchars(strip_tags(trim($_POST['subject'])), ENT_QUOTES, 'UTF-8');

  // Uncomment below code if you want to use SMTP to send emails. You need to enter your correct SMTP credentials
  /*
  $contact->smtp = array(
    'host' => 'example.com',
    'username' => 'example',
    'password' => 'pass',
    'port' => '587'
  );
  */

  // Sanitize message content before adding to form
  $contact->add_message( htmlspecialchars(strip_tags(trim($_POST['name'])), ENT_QUOTES, 'UTF-8'), 'From');
  $contact->add_message( filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL), 'Email');
  $contact->add_message( htmlspecialchars(strip_tags(trim($_POST['message'])), ENT_QUOTES, 'UTF-8'), 'Message', 10);

  echo $contact->send();
?>
