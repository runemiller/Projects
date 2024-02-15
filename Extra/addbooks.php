<!DOCTYPE html>
<html>
	<head>
		<title>Inserting Data</title>
	</head>

	<body>
		<h1>Inserting Data... Please Wait For Webpage To Load</h1>

		<?php
			$mysqli = mysqli_connect("localhost", "2112834", "85rj5j", "db2112834");

			$title = $_GET['inp_title'];
			$author = $_GET['inp_author'];
			$own = $_GET['inp_owner'];
			$insert = "INSERT INTO `bookcase`(`title`, `author`, `own`) VALUES ('$title','$author','$own')";
			mysqli_query($mysqli, $insert);
			header("Refresh:0; bookcase.php");
		?>
	</body>
</html>