<?php
	
	include '../mysqlLogin.php';
	include '../getParam.php'; 
	
	$userID = getParam($params, "userID");
	$eventID = getParam($params, "eventID");
	$absenceTypeID = getParam($params, "absenceTypeID");
	$minDateTime = getParam($params, "minDateTime");
			
	$sql = "CALL GetAbsences(" . $userID . "," . $eventID . "," . $absenceTypeID . ",'" . $minDateTime . "');";

	$result = $conn->query($sql);
	if ($result->num_rows > 0) {
	    
		$rows = array();

		while($r = mysqli_fetch_assoc($result)) {   		
	   		$rows[] = $r;
		}
	} else {
	    echo "0 results";
	}


	include '../mysqlLogout.php';
	include '../mysqlLogin.php';

	$final = array();

	foreach ($rows as $r){
		$sql2 = "CALL GetAbsenceComments(" . $r["absenceID"] . ");";
		$result2 = $conn->query($sql2);

		if ($result2->num_rows > 0) {
			$rows2 = array();
			while($r2 = mysqli_fetch_assoc($result2)) {
		   		$rows2[] = $r2;
			}
			$r["comments"] = $rows2;
		} 
		$final[] = $r;
	}

	echo json_encode($final);

	include '../mysqlLogout.php';
?>





