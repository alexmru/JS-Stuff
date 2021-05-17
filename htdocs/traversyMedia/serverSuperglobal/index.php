<?php include 'server-info.php'; ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css">
</head>
<body>
    <div class="container">
    <h1>Server and file info</h1>
    <?php if($server): ?>
        <ul class="list-group">
        <?php foreach($server as $key => $value): ?>
            <li class="list-group-item"> 
            <strong><?php echo $key; ?> :<?php echo $value; ?>
            </li>
        <?php endforeach; ?>
        </ul>
    <?php endif; ?>
    </div>
</body>
</html>
