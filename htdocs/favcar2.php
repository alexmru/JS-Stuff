<?php

session_start();

$name = $_POST["name"];
$favcar = $_POST["fav-car"];

$message;


switch ($favcar) {
    case 'renault':
        $message = "Oau , iti place renault , serios?";
        break;
    case 'audi':
        $message = "Iti place Audi , super!";
        break;
    case 'bmw':
        $message = "BMW, da, masina confortabila!";
        break;
    default:
        $message = "Nu te cred!";
}

$_SESSION['favCar1'] = 'Mclaren';
$_SESSION['favCar2'] = 'Ferrari';

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
    
<h1>Masina ta preferata este : </h1>

<a href="http://localhost:8888/favcar3.php">Click aici pentru pagina cu masini !</a>

<?php

echo $message;

?>

</body>
</html>