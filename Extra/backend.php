<?php
$servername = "localhost";
$username = "2112834";
$password = "85rj5j";
$dbname = "db2112834";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT title, artist, album FROM music_game ORDER BY RAND() LIMIT 1";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $response = array("title" => $row["title"], "artist" => $row["artist"], "album" => $row["album"]);
    echo json_encode($response);
} else {
    echo "No songs found";
}

$conn->close();
?>