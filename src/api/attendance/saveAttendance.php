<?php
	
	include '../mysqlLogin.php';
	include '../getParam.php'; 
	
	$userID = getParam($params, "userID");
	$eventID = getParam($params, "eventID");
	$attendanceStatusID = getParam($params, "attendanceStatusID");
	$enteredByUserID = getParam($params, "enteredByUserID");

	$sql = "CALL SaveAttendance(" . $userID . ", " . $eventID . ", " . $attendanceStatusID . "," . $enteredByUserID . ");";

	if ($stmt = $conn->prepare($sql)) {
		$stmt->execute();
		$stmt->bind_result($id);
		$stmt->fetch();
		echo $id;
		$stmt->close();
	}

	include '../mysqlLogout.php';
?>