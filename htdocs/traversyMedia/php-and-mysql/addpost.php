<?php 
require('config/config.php');
require('config/db.php');

if(isset($_POST['submit'])) {
    $title = mysqli_real_escape_string($connection, $_POST['title']);
    $body = mysqli_real_escape_string($connection, $_POST['body']);
    $author = mysqli_real_escape_string($connection, $_POST['author']);

    $query ="INSERT INTO posts(title, author, body) VALUES('$title', '$author', '$body')";

    if(mysqli_query($connection, $query)) {
        header('Location:' . ROOT_URL . '');
    } else {
        echo 'ERROR: '. mysqli_error($connection);
    }
}

?>

    <?php include('inc/header.php'); ?>
    <h1>Add Post</h1>
    <div class="container">
    <form action="<?php $_SERVER['PHP_SELF']; ?>" method="post">
    <div class="form-group">
    <label for="">Title</label>
    <input type="text" name="title" id="" class="form-control">
    </div>
    <div class="form-group">
    <label for="">Author</label>
    <input type="text" name="author" id="" class="form-control">
    </div>
    <div class="form-group">
    <label for="">Body</label>
    <textarea name="body" id="" class="form-control"></textarea>
    </div>
    <input type="submit" value="submit" name="submit" class="btn btn-primary">
    </form>
    </div>
    <?php include('inc/footer.php'); ?>

