<?php 
require('config/config.php');
require('config/db.php');

if(isset($_POST['delete'])) {
    // GET FORM DATA
    $delete_id = mysqli_real_escape_string($connection, $_POST['delete_id']);

    $query ="DELETE FROM posts WHERE id = {$delete_id}";

    if(mysqli_query($connection, $query)) {
        header('Location:' . ROOT_URL . '');
    } else {
        echo 'ERROR: '. mysqli_error($connection);
    }
}

//Get id
$id = mysqli_real_escape_string($connection, $_GET['id']);
// Create query
$query = 'SELECT * FROM posts WHERE id = ' . $id;
// Get result
$result = mysqli_query($connection, $query);
// Fetch Data
$post = mysqli_fetch_assoc($result);
// Free Result
mysqli_free_result($result);
//Close connection
mysqli_close($connection);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Blog</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/cerulean/bootstrap.min.css">
</head>
<body>
        <div class="container">
        <a class="btn btn-secondary" href="<?php echo ROOT_URL ?>">Back</a>
        <h1><?php echo $post['title'];?></h1>
        <small>Created on <?php echo $post['created_at']; ?> by <?php echo $post['author']; ?></small>
        <p><?php echo $post['body']; ?></p>
        <hr>
        <form action="<?php echo $_SERVER['PHP_SELF']; ?>" class="pull-right" method="POST">
        <input type="hidden" name="delete_id" value="<?php echo $post['id']; ?>">
        <input type="submit" name="delete" value="Delete" class="btn btn-danger">
        </form>
        <a href="<?php echo ROOT_URL; ?>editpost.php?id=<?php echo $post['id']; ?>" class="btn btn-primary">Edit the post</a>
        </div>
</body>
</html>
