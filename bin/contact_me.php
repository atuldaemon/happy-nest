<?php
// check if fields passed are empty
if(empty($_POST['name'])        ||
   empty($_POST['email'])       ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
    echo "No arguments Provided!";
    return false;
   }
    
$name = $_POST['name'];
// $phone = $_POST['phone'];
$email_address = $_POST['email'];
$message = $_POST['message'];
$numOfGuests = $_POST['numOfGuests'];
$checkinDate = $_POST['checkin'];
$checkoutDate = $_POST['checkout'];
    
// create email body and send it    
$to = 'contact@happy-nest.in';
$email_subject = "Accomodation inquiry";
$email_body = "You have received a new message. \n\n".
                  "Here are the details:\n \nName: $name \n".
                  "Email: $email_address\n".
                  "Number of guests: $numOfGuests\n".
                  "Checkin Date (mm/dd/yyyy): $checkinDate\n".
                  "Checkout Date (mm/dd/yyyy): $checkoutDate\n".
                  "Message \n $message";
$headers = "From: me@happy-nest.in\n";
$headers .= "Reply-To: $email_address"; 
mail($to, $email_subject, $email_body, $headers);
return true;
?>
