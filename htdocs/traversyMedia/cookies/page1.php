<?php
if(isset($_POST['submit'])) {
    $username = htmlentities($_POST['username']);

    setcookie('username', $username, time()+3600);
    // seteaza cookie-ul pentru o ora

    header('Location: page2.php');

}


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cookies</title>
</head>
<body>
    <form action="<?php echo $_SERVER['PHP_SELF'] ?>" method="post">
    <input type="text" name="username" placeholder="Enter Username" id="">
    <input type="submit" value="Submit" name="submit">
    </form>

    
</body>
</html>