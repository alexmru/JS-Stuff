<?php 
require('config/config.php');
require('config/db.php');

if(isset($_POST['submit'])) {
    // GET FORM DATA
    $updated_id = mysqli_real_escape_string($connection, $_POST['update_id']);
    $title = mysqli_real_escape_string($connection, $_POST['title']);
    $body = mysqli_real_escape_string($connection, $_POST['body']);
    $author = mysqli_real_escape_string($connection, $_POST['author']);

    $query ="UPDATE posts SET title='$title', author = '$author', body = '$body' WHERE id = {$updated_id}";

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

    <?php include('inc/header.php'); ?>
    <h1>Add Post</h1>
    <div class="container">
    <form action="<?php $_SERVER['PHP_SELF']; ?>" method="post">
    <div class="form-group">
    <label for="">Title</label>
    <input type="text" name="title" id="" class="form-control" value="<?php echo $post['title']; ?>">
    </div>
    <div class="form-group">
    <label for="">Author</label>
    <input type="text" name="author" id="" class="form-control" value="<?php echo $post['author']; ?>">
    </div>
    <div class="form-group">
    <label for="">Body</label>
    <textarea name="body" id="" class="form-control"><?php echo $post['body']; ?></textarea>
    </div>
    <input type="hidden" name="update_id" value="<?php echo $post['id'] ?>">
    <input type="submit" value="submit" name="submit" class="btn btn-primary">
    </form>
    </div>
    <?php include('inc/footer.php'); ?>

