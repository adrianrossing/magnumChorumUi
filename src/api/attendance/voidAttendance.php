<?php
	
	include '../mysqlLogin.php';
	include '../getParam.php'; 
	
	$attendanceID = getParam($params, "attendanceID");
	$updatedByUserID = getParam($params, "updatedByUserID");

	$sql = "CALL VoidAttendance(" . $attendanceID . ");";

	if ($stmt = $conn->prepare($sql)) {
		$stmt->execute();
		$stmt->bind_result($id);
		$stmt->fetch();
		$stmt->close();
	}

	include '../mysqlLogout.php';
?>