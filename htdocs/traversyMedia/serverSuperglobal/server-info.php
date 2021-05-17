<?php

// Server Superglobal

$server = [
    'Host Server Name' => $_SERVER['SERVER_NAME'],
    'Host Header' => $_SERVER['HTTP_HOST'],
    'Server Software' => $_SERVER['SERVER_SOFTWARE'],
    'Document Root' => $_SERVER['DOCUMENT_ROOT'],
    'Current Page' => $_SERVER['PHP_SELF'],
    'Absolute Path' => $_SERVER['SCRIPT_FILENAME']
];

// echo $server['Host Server Name'];
// echo'<br>';
// echo $server['Host Header'];
// echo'<br>';
// echo $server['Server Software'];
// echo'<br>';
// echo $server['Document Root'];
// echo'<br>';
// echo $server['Current Page'];
// echo'<br>';
// echo $server['Absolute Path'];
// echo'<br>';
// echo'<br>';
// echo'<br>';
// echo'<br>';


// $client = [
//     'Client System info' => $_SERVER['HTTP_USER_AGENT'],
//     'Client IP' => $_SERVER['REMOTE_ADDR'],
//     'Remote Port' => $_SERVER['REMOTE_PORT']
// ];

// echo $client['Client System info'];
// echo'<br>';
// echo'<br>';
// echo $client['Client IP'];
// echo'<br>';
// echo'<br>';
// echo $client['Remote Port'];
// echo'<br>';
// echo'<br>';