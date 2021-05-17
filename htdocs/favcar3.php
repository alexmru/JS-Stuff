<?php

session_start();

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


    <h1>Mai jos gasim doua dintre cele mai tari SUPER MASINI</h1>
    <br>
    <br>
    <?php 
    echo "Ele sunt " . $_SESSION['favCar1'] . " si " . $_SESSION['favCar2'];
    echo "<br>";

    print_r($_SESSION);
    ?>
    
</body>
</html>