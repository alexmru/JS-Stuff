<?php 



?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        label, input {
            display: block;

        }
    </style>
</head>
<body>

<form action="favcar2.php" method="POST">
<label for="name">Name: </label>
<input type="text" name="name">
<label for="fav-car">Favorite car</label>
<select name="fav-car">
    <option value="dacia">Dacia</option>
    <option value="audi">Audi</option>
    <option value="bmw">BMW</option>
    <option value="renault">Renault</option>
</select>

<input type="submit">


</form>

    
</body>
</html>