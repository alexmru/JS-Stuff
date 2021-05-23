<?php
    session_start();

    print_r($_SESSION);

    $name = $_SESSION['name'];
    $email = $_SESSION['email'];
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
<h1> Hello <?php echo $name; ?></h1>

<a href="page4.php">Destroy the session</a>
    
</body>
</html>