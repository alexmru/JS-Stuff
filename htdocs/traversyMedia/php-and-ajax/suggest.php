<?php
$people[] = "Steve";
$people[] = "Alex";
$people[] = "Oana";
$people[] = "Olivia";
$people[] = "Jack";
$people[] = "Catalin";
$people[] = "Adrian";
$people[] = "Andrei";
$people[] = "Aurelia";
$people[] = "Steluta";
$people[] = "Ilie";
$people[] = "Ionut";
$people[] = "Bogdan";
$people[] = "George";
$people[] = "Lando";
$people[] = "Lewis";
$people[] = "Daniel";
$people[] = "Marian";
$people[] = "Cristi";
$people[] = "Vali";
$people[] = "Lucian";
$people[] = "Lucretiu";
$people[] = "Fabian";
$people[] = "David";
$people[] = "Ernest";
$people[] = "Merry";
$people[] = "Sebastian";
$people[] = "Lance";
$people[] = "Antonio";

$q = $_GET['q'];
$suggestion = '';

if($q !== '') {
    $q = strtolower($q);
    $len = strlen($q);
    foreach($people as $person) {
        if(stristr($q, substr($person, 0, $len))) {
            if($suggestion === '') {
                $suggestion = $person;
            } else {
                $suggestion .= ", $person";
            }
        }
    }
}
echo $suggestion === '' ? "No Suggestion" : $suggestion;

?>