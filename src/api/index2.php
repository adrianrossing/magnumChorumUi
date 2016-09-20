<?php
$servername = "localhost";
$username="intranetmc_intranet";
	$password="w#7^Sqv#DyxX";
	$dbname="intranetmc_intranet";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT * FROM user";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    
	echo($result);

    // // output data of each row
    // while($row = $result->fetch_assoc()) {
    //     echo " - Name: " . $row["email"] . "<br>";
    // }
} else {
    echo "0 results";
}

$conn->close();
?>