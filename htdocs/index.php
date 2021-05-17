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
    <style>

        a {
            display: block;
        }
    </style>
</head>
<body>

<h1>Hey there !</h1>

<?php

$text = " he he";

include 'included.php';

echo "This here is some php" . $text ."<br>";

echo "And this is some php aswell $text<br> <br> <br> <br>";

$a = 5;
$b = 10;

echo $a + $b;
echo "<br>";
echo $a . $b;


echo "<br> <br> <br> <br>";
$afirmatie = false;

if ($afirmatie) {
    echo " Afirmatia este adevarata !";
} else { 
    echo " Afirmatia este falsa !";
}

echo "<br> <br> <br> <br>";
?>

<?php 

$names = array("Hamilton", "Verstappen", "Norris");

// echo "The winner of the 2021 championship is " . $names[1];
// echo "<br> <br>";

for($i = 0; $i < count($names) - 1; $i++) {
   echo $names[$i] . '<br>';
}
echo "<br> <br> <br> <br>";

?>

<form action="processForm.php" method="POST">
    <label for="name">name</label>
    <input type="text" name="name" id=""><br><br>
    <label for="email">email</label>
    <input type="text" name="email" id="">
    <input type="submit">

</form>

<?php 
$_SESSION['favCar1'] = 'Mclaren';
$_SESSION['favCar2'] = 'Ferrari';

?>

<a href="http://localhost:8888/favcar3.php">Click aici pentru pagina cu masini !</a>

<a href="http://localhost:8888/freeCodeCamp1.php">freeCodeCamp1</a>

<a href="http://localhost:8888/sanbox.php">Sandbox</a>

    
</body>
</html>