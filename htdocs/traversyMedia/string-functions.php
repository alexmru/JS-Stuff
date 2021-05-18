<?php 
// FUNCTII PENTRU STRING-uri

$string = 'Alexandru';

$output = substr('Alexandru', 1, 3);

echo $output;
echo '<br>';

$length = strlen($string);

echo $length;
echo '<br>';

$position = strpos($string, 'a');
echo $position;
echo '<br>';

$upper = strtoupper($string);
echo $upper;
echo '<br>';

$salut = 'Buna ziua !';
$salutModificat = str_replace('ziua', 'seara', $salut);
echo $salutModificat;
echo '<br>';

