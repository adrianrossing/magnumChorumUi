<?php
	
	include '../mysqlLogin.php';
	include '../getParam.php'; 
	
	$eventID = getParam($params, "eventID");

	$sql = "CALL GetUsersForAttendance(" . $eventID . ");";
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