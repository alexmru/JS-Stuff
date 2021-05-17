<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<?php
$lista = ['Alex', 'Oana', 'Cati', 'Adi'];
print_r($lista);
echo '<br>';

// CUM SE AFISEAZA DATA

echo date('d'); // day 
echo '<br>';
echo date('m'); // month
echo '<br>';
echo date('y'); // year
echo '<br>';
echo date('l'); //day of the week
echo '<br>';

echo date('d/m/y');
echo '<br>';

// afisare ora
date_default_timezone_set('Europe/Bucharest');
echo date('h:i:sa');
echo '<br>';

$timestamp = mktime(0, 0, 0, 11, 6, 1988);
echo $timestamp;
echo '<br>';

echo date('d/m/y', $timestamp);
echo '<br>';



?>

    
</body>
</html>