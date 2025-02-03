<!--    http://localhost:8000/php/index.php -->
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
    <div class="logos"><img src="php.png" alt="PHP Logo" width="200" /></div>
    <h1>Heure Courante</h1>

    <span id="current-time">
        <?php echo $current_time; ?>

    </span>

</body>
