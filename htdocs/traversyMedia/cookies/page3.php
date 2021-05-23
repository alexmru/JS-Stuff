<?php 

$user = ['name' => 'Alex', 'email' => 'alex@test.com', 'age' => 32];
// pentru a putea crea un cookie in care sa introducem un array folosim serialize()

$userCookie = serialize($user);

setcookie('user', $userCookie, time() + 36000);

$userCookie = unserialize($_COOKIE['user']);

echo $userCookie['name'];

?>