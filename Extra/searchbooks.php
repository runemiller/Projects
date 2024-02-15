<?php session_start(); ?>
<?php error_reporting(0); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Bookcase</title>
    <style>
        .gridcontainer {
        	display: grid;
        	grid-template-columns: auto;
        	grid-template-rows: auto;
        	padding: 10px;
        	border:2px solid Black;
        	height: 100%;
        	text-align: center;
        	font-family: Arial, sans-serif;
        }

        .item {
        	grid-column-start: 1;
        	grid-column-end: 2;
        	grid-row-start: 1;
        	grid-row-end: 3;
        }

        table, th, td {
        	border: 1px solid black;
        }
    </style>
</head>
<body>
    <div class="gridcontainer">
        <div class="item">
            <form method="get" name="form" action="addbooks.php">
                 <h4>Add New Books</h4>
                 <p>Book Title: <input type="text" name="inp_title"></p>
                 <p>Author Name: <input type="text" name="inp_author"></p>
                 <div id="result"></div>
                 <p>Owner: <select name="inp_owner"><option value="Natasha">Natasha</option><option value="Kieron">Kieron</option></select></p>
                 <input type="submit" value="Add Book">
            </form>
            <br>
            <h4>Search Books</h4>
            <form method="get" name="form" action="searchbooks.php">
                <p>By Title: <input type="text" name="inp_title"></p>
                <?php $type = "Title" ?>
                <input type="submit" value="Search By Title">
            </form>
            <form method="get" name="form" action="searchbooks.php">
                <p>By Author: <input type="text" name="inp_author"></p>
                <?php $type = "Author" ?>
                <input type="submit" value="Search By Author">
            </form>
            <form method="get" name="form" action="bookcase.php">
                <input type="submit" value="View All Books">
            </form>
            <br>
            <table style="width:100%">
                <tr>
                    <th>Book Title</th>
                    <th>Author</th>
                    <th>Owned By</th>
                </tr>

                <?php
                    $mysqli = mysqli_connect("localhost", "2112834", "85rj5j", "db2112834");
                    if (mysqli_connect_errno()) {
                        echo "Failed to connect to MySQL: " . mysqli_connect_error();
                    }

                    $selection = $_SESSION['type'];
                    $title = $_GET['inp_title'];
                    $author = $_GET['inp_author'];

                    if ($selection = "Title") {
                        $res = mysqli_query($mysqli, "SELECT * FROM bookcase WHERE `title`='" . $title . "' ORDER BY author, title");
                        while($row = mysqli_fetch_assoc($res)) {
                            echo "<tr><td>" . $row['title'] . "</td><td>" . $row['author'] . "</td><td>" . $row['own'] . "</td></tr>";
                        }
                    }
                    if ($selection = "Author") {
                        $res = mysqli_query($mysqli, "SELECT * FROM bookcase WHERE `author`='" . $author . "' ORDER BY author, title");
                        while($row = mysqli_fetch_assoc($res)) {
                            echo "<tr><td>" . $row['title'] . "</td><td>" . $row['author'] . "</td><td>" . $row['own'] . "</td></tr>";
                        }
                    }

                    if(!$res) {
                        print("MySQL error: " . mysqli_error($mysqli));
                        exit;
                    }
                ?>
            </table>
        </div>
    </div>
</body>
</html>