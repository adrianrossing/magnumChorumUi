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

	$params = [];//= array_fill_keys($keys, $values);
	foreach (explode("&", $_SERVER['argv'][0]) as $p){
		$queryParam = explode("=", $p);
		$params[$queryParam[0]] = $queryParam[1];
	}

	function getParam($p, $v) {
		$ret = null;
	    if (isset($p[$v]) && !empty($p[$v]))
		{
			$ret = $p[$v];
		}
		if ($ret === null) {
		    echo 'error getting eventID';
		}
	    return $ret;
	}

?>