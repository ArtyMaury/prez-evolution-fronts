<!DOCTYPE html>
<html lang="fr">
<head>
    <!--    http://localhost:8000/index-reactif.php -->
    <meta charset="UTF-8">
    <title>Heure Courante</title>
    <link rel="stylesheet" href="style.css">
    <script>
      function updateTime() {
        document.getElementById('current-time').textContent = new Date().toTimeString().replace(/ .*/, '');
      }
      setInterval(updateTime, 1000);
      window.onload = updateTime;

      window.maVariable = 'Hello World';
      console.log("ma variable : ", window.maVariable);
    </script>
</head>
<body>
<div class="logos"><img src="php.png" alt="PHP Logo" width="200"> + <img src="js.svg" alt="JS Logo" width="100"></div>
<h1>Heure Courante</h1>


<span id="current-time">
    <?php
    date_default_timezone_set('Europe/Paris');
    echo date('H:i:s');
    ?>
</span>

<a href="page2.php">Page 2</a>


</body>
</html>