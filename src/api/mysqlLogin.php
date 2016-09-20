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
?>