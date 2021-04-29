<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<h1>Hey there !</h1>

<?php

$text = " he he";

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

?>
    
</body>
</html>