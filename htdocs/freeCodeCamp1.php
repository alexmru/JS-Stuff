<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FCC1</title>
    <style>
        body {
            background-color: green;
        }
    </style>
</head>
<body>

<h1>Introdu numele tau !</h1>

<!-- <form action="freeCodeCamp1.php" method="get">
    <input type="text" name="nume" placeholder="nume">
    <input type="text" name="prenume" placeholder="prenume">
    <input type="submit">
</form> -->

<form action="freeCodeCamp1.php" method="post">
    Ricciardo: <input type="checkbox" name="f1drivers[]" value="Ricciardo"><br>
    Perez: <input type="checkbox" name="f1drivers[]" value="Perez"><br>
    Alonso: <input type="checkbox" name="f1drivers[]" value="Alonso"><br>
    <input type="submit">
</form>

<?php 
// echo $_GET["nume"] . " " . $_GET["prenume"];


echo "<br>";
$f1drivers = $_POST["f1drivers"];
// echo $f1drivers[2];

class F1Car {
    public $name;
    public $power;
    public $color;
    public $maxSpeed;

    function __construct($name, $power, $color, $maxSpeed) {
        $this->name = $name;
        $this->power = $power;
        $this->color = $color;
        $this->maxSpeed = $maxSpeed;
    }
}

$merc = new F1Car("mercedes", "990hp", "silver", "325");

echo $merc->color;

?>



    
</body>
</html>