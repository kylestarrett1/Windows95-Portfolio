<?php       
    $visitor_name = stripcslashes($_POST['name']);
    $visitor_email = stripcslashes($_POST['email']);
    $visitor_phone = stripcslashes($_POST['phone']);
    $visitor_notes = stripcslashes($_POST['notes']);

    $email_header = "From: $visitor_email\n" . "Reply-To: " . $visitor_email;

    $email_body = "New inquiry.\n\n" . "Name: $visitor_name\n"
                                            . "Email: $visitor_email\n"
                                            . "Phone: $visitor_phone\n"
                                            . "Notes: $visitor_notes";

    if (mail("kylestarrett-audio@kylestarrett.com", "Thank you for reaching out.", $email_body, $email_header)) {
       print '<html>';
       print    '<body style="background: url(contact-background.png) repeat center center fixed; background-size: auto; height: 100%; overflow: hidden;">';
       print        '<div id="main-confirmation" style="width: 800px; height: 250px; background-color: #506d69; margin: 6% auto; border-radius: 25px; display: flex; flex-direction: column; justify-content: center; align-items: center;">'; 
       print            '<h4 style="font-weight: bold; color:mintcream;">Contact Information Sent</h4>';
       print            '<h4 style="font-weight: lighter; color:mintcream;">Thank you for contacting us!</h4>';
       print        '</div>';
       print    '</body>';
       print '</html>';
    }
    else {
        print "There was a problem!";
    }
    exit;
?>