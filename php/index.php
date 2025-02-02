<!DOCTYPE html>
<html lang="fr">
<head>
<!--    http://localhost:8000/index.php -->
    <meta charset="UTF-8">
    <title>Heure Courante</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<div class="logos"><img src="php.png" alt="PHP Logo" width="200"></div>
<h1>Heure Courante</h1>


<span id="current-time">
    <?php
    date_default_timezone_set('Europe/Paris');
    echo date('H:i:s');
    ?>
</span>


</body>
</html>