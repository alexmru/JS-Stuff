<?php 
    if(isset($_POST['submit'])) {
        session_start();
        $_SESSION['name'] = htmlentities($_POST['name']);
        $_SESSION['email'] = htmlentities($_POST['email']);

        
        header('Location: page2.php');
    }

    
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
    <input type="text" name="name" id="" placeholder="Enter your name here">
    <br>
    <input type="text" name="email" id="" placeholder="Enter your email here">
    <br>
    <input type="submit" value="Submit" name="submit">
    <br>

    </form>
    
</body>
</html>