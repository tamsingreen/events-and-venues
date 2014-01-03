<?php
function spamcheck($field)
  {
  //filter_var() sanitizes the e-mail
  //address using FILTER_SANITIZE_EMAIL
  $field=filter_var($field, FILTER_SANITIZE_EMAIL);

  //filter_var() validates the e-mail
  //address using FILTER_VALIDATE_EMAIL
  if(filter_var($field, FILTER_VALIDATE_EMAIL))
    {
    return TRUE;
    }
  else
    {
    return FALSE;
    }
  } //end spamcheck function

if (isset($_REQUEST['email']))
  {//if "email" is filled out, proceed

  //check if the email address is invalid
  $mailcheck = spamcheck($_REQUEST['email']);
  if ($mailcheck==FALSE)
    {
    echo "Invalid input";
    }
  else
    {
	$myemail = 'ajheventsandvenues@gmail.com';
	$to = $myemail; 
	$fromname = $_POST['name']; 
	$fromemail = $_POST['email'];
	$fromdetails = $_POST['details']; 
	$email_subject = "New event from $fromname";
	$email_body = "You have received a new event through the Events & venues website. ".
	"Here are the details:\n Name: $fromname \n Email: $fromemail \n Details: $fromdetails"; 
	
	$headers = "From: $myemail\n"; 
	$headers .= "Reply-To: $fromemail";
	
	mail($to,$email_subject,$email_body,$headers);
	//redirect to the 'thank you' page
	header('Location: eventsubmitted.html');
	}
  }
?>