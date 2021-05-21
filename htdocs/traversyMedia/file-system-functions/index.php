<?php

$path = 'dir1/myfile.php';
$file = 'file1.txt';

echo file_exists($file);
echo '<br>';

echo realpath($file);
echo '<br>';

// returneaza numele documentului cu sau fara extensie
// echo basename($path);
// echo '<br>';
// echo basename($path, '.php');
// echo '<br>';

// echo filesize($file);

// Creeaza un folder

// mkdir('test');

// Sterge un folder daca e gol
// rmdir('test');

// echo copy($file, 'file2.txt');

// redenumire fisier

// $file2 = 'file2.txt';
// rename($file2, 'fisierCopiat.txt');

// stergere document

// unlink('fisierCopiat.txt');

//inlocuire text in document

// file_put_contents($file, 'Hello world!');


