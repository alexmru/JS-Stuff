<?php
    //Message Variables
    $msg = '';
    $msgClass = '';


if(filter_has_var(INPUT_POST, 'submit')) {
    // Getting form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Check required fields
    if(!empty($email) && !empty($name) && !empty($message)) {
        //PASS
        // Check email
        if(filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
            //failed
            $msg = 'Please use a valid email';
            $msgClass ='alert-danger';
        } else {
            $toEmail = 'alexandrumiroiu@gmail.com';
            $subject = 'Mesaj de la '. $name;
            $body = '<h2>Cerere de prietenie</h2>
                        <h4>Nume</h4> <p>' . $name .'</p>
                        <h4>Email</h4> <p>' . $email .'</p>
                        <h4>Mesaj</h4> <p>' . $message .'</p>';

            // Email headers
            $headers = "MIME-Version: 1.0" . "\r\n";
            $headers .= "Content-Type:text/html;charset=UTF-8". "\r\n";
            //Additional headers
            $headers .= "From: " .$name . "<" . $email . ">" . "\r\n";
            
            if(mail($toEmail, $subject, $body, $headers)) {
                // If email is sent
                $msg = 'Email was sent !';
                $msgClass ='alert-danger';
            } else {
                // If email fails to send
                $msg = 'Your email was not sent';
                $msgClass = 'alert-danger';
            }

        }

    } else {
        // Failed
        $msg = 'Please fill in all fields';
        $msgClass ='alert-danger';
    }
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact us</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css">
</head>
<body>
    <nav class="navbar navbar-default">
        <div class="container">
            <div class="navbar-header">
                <a href="index.php" class="navbar-brand">My website</a>
            </div>
        </div>
    </nav>
    <div class="container">

    <?php if($msg != ''): ?>
        <div class="alert <?php echo $msgClass; ?>"> <?php echo $msg;?></div>
    <?php endif; ?>

    <form action="<?php echo $_SERVER['PHP_SELF'] ?>" method="post">
    <div class="form-group">
    <label for="">Name</label>
    <input type="text" name="name" id="" class="form-control" value=" <?php echo isset($_POST['name']) ? $name : ''; ?>">
    </div>
    <div class="form-group">
    <label for="">Email</label>
    <input type="text" name="email" id="" class="form-control" value=" <?php echo isset($_POST['email']) ? $email : ''; ?>">
    </div>
    <div class="form-group">
    <label for="">Message</label>
    <textarea name="message" class="form-control" id="" cols="30" rows="10"> <?php echo isset($_POST['message']) ? $message : ''; ?></textarea>
    </div>
    <br>
    <button type="submit" name="submit" class="btn btn-primary">Submit</button>
    </form>
    </div>
</body>
</html>