<!--    http://localhost:8000/php/page1.php -->
<?php
include 'head.php';
?>
<body>
    <script>
      window.maVariable = 'Hello World';
      console.log("ma variable : ", window.maVariable);
    </script>

    <h1>Page 1</h1>

    <a href="page2.php">Page 2</a>

</body>
