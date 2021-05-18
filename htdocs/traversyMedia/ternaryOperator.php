<?php

$loggedIn = true;

echo ($loggedIn) ? 'Esti logat !' : 'nu esti logat !';

echo '<br>';

$isRegistered = ($loggedIn) ? true : false ;

echo $isRegistered;


$age = 40;
$height = 120;

echo 'You are ' . ($age > 14 ? ($height > 160 ? 'Allowed' : 'Not allowed') : 'Not allowed');

