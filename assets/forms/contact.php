<?php
  
if($_POST) {
    $name = "";
    $email = "";
    $subject = "";
    $message = "";
    $recipient = "preston4896@me.com";
    $email_body = "<div>";
      
    if(isset($_POST['name'])) {
        $visitor_name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
        $email_body .= "<div>
                           <label><b>Visitor Name:</b></label>&nbsp;<span>".$name."</span>
                        </div>";
    }
 
    if(isset($_POST['email'])) {
        $visitor_email = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['email']);
        $visitor_email = filter_var($email, FILTER_VALIDATE_EMAIL);
        $email_body .= "<div>
                           <label><b>Visitor Email:</b></label>&nbsp;<span>".$email."</span>
                        </div>";
    }
      
    if(isset($_POST['subject'])) {
        $email_title = filter_var($_POST['subject'], FILTER_SANITIZE_STRING);
        $email_body .= "<div>
                           <label><b>Subject:</b></label>&nbsp;<span>".$subject."</span>
                        </div>";
    }
      
    if(isset($_POST['message'])) {
        $message = htmlspecialchars($_POST['message']);
        $email_body .= "<div>
                           <label><b>Visitor Message:</b></label>
                           <div>".$message."</div>
                        </div>";
    }
      
    $email_body .= "</div>";
 
    $headers  = 'MIME-Version: 1.0' . "\r\n"
    .'Content-type: text/html; charset=utf-8' . "\r\n"
    .'From: ' . $email . "\r\n";
      
    mail($recipient, $subject, $email_body, $headers) or die("Failed to send message.");
      
} else {
    echo '<p>Something went wrong</p>';
}
?>