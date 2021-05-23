<?php
setcookie('username', 'Frank', time()+3600);

//pentru a sterge cookie-ul , ii setam parametrul time negativ , in trecut

// setcookie('username', 'Frank', time()-3600);

if(count($_COOKIE) > 0) {
    echo "there are " . count($_COOKIE) . ' cookies saved <br>';
} else {
    echo 'There are no cookies saved <br>';
}

if(isset($_COOKIE['username'])) {
    echo 'User ' . $_COOKIE['username'] . ' is set <br>';
} else {
    echo 'User is not set';
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
    
</body>
</html>