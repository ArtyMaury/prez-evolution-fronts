<!--    http://localhost:8000/php/index-reactif.php -->
<?php
include 'head.php';

function fetchTimeFromAPI() {
    $response = file_get_contents('http://localhost:8888/time');
    $data = json_decode($response, true);
    return $data['time'];
}

$current_time = fetchTimeFromAPI();
?>
<body>
    <script>
      function updateTime() {
        fetch('http://localhost:8888/time')
          .then(response => response.json())
          .then(data => {
            document.getElementById('current-time').textContent = data.time;
          });
      }
      setInterval(updateTime, 1000);
    </script>

    <div class="logos"><img src="php.png" alt="PHP Logo" width="200" /> + <img src="js.svg" alt="JS Logo" width="100" /></div>
    <h1>Heure Courante</h1>

    <span id="current-time">
        <?php echo $current_time; ?>
    </span>

</body>
