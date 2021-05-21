<?php 
    // Create connection
    $connection = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);
    // Check connection
    if(mysqli_connect_errno()) {
        //Connection failed
        echo 'Failed to connect to MYSQL'. mysqli_connect_errno();
    } else {
        // echo 'ALL GOOD' .'<br>';
    }
