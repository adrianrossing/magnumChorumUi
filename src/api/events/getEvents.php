<?php
	
	include '../mysqlLogin.php';

	$minDateTime = "2016-01-01";
	$maxDateTime = "2017-01-01";

	$sql = "CALL GetEvents('" . $minDateTime . "','" . $maxDateTime . "');";
	$result = $conn->query($sql);

	if ($result->num_rows > 0) {
	    
		$rows = array();
		while($r = mysqli_fetch_assoc($result)) {
		    $rows[] = $r;
		}
		echo json_encode($rows);
	} else {
	    echo "0 results";
	}

	include '../mysqlLogout.php';
?>