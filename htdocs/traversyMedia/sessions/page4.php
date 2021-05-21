<?php 
    session_start();

    session_destroy();

    header('Location: page1.php');

?>