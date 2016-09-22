<?php
	
	include '../mysqlLogin.php';

	$userID = 1;
	$eventID = 1;
	$absenceTypeID = 1;
	$minDateTime = "2016-01-01";

	$sql = "CALL GetAbsences(" . $userID . "," . $eventID . "," . $absenceTypeID . ",'" . $minDateTime . "');";
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