<?php
if(filter_has_var(INPUT_POST, 'data')){
    echo 'Data found!';
} else {
    echo "No data found!";
}

// if(filter_input(INPUT_POST, 'data', FILTER_VALIDATE_EMAIL)) {
//     echo "Valid email";
// } else {
//     echo "Email is not valid !";
// }

?>

<form action="filters-and-validation.php" method="post">
<input type="text" name="data" id="">
<input type="text" name="data2" id="">
<button type="submit">Submit</button>
</form>

<div>
<?php


$email = $_POST['data'];
$email = filter_var($email, FILTER_SANITIZE_EMAIL);
echo $email;
echo '<br>';


?>
</div>