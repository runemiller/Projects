<?php
$servername = "localhost";
$username = "2112834";
$password = "85rj5j";
$dbname = "db2112834";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if (isset($_POST['username']) && isset($_POST['score'])) {
    $username = $conn->real_escape_string($_POST['username']);
    $score = intval($_POST['score']);

    $sqlInsert = "INSERT INTO scores (username, score) VALUES ('$username', $score)";
    $conn->query($sqlInsert);

    $sqlSelect = "SELECT MAX(score) as highScore, username FROM scores GROUP BY username ORDER BY highScore DESC LIMIT 1";
    $result = $conn->query($sqlSelect);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $highScore = $row['highScore'];
        $highScorer = $row['username'];

        $response = array("highScore" => $highScore, "highScorer" => $highScorer);
        echo json_encode($response);
    } else {
        echo "No scores found";
    }
} else {
    echo "Invalid request";
}

$conn->close();
?>
