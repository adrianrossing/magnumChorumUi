<?php
	
	include '../mysqlLogin.php';

	$eventName = "Test";
	$beginDateTime = "2016-09-24 9:30";
	$endDateTime = "2016-09-24 3:00";
	$locationID = 1;
	$notes = "test notes";
	$allowAttendance = 1;

	$sql = "CALL CreateNewEvent('" . $eventName . "','" . $beginDateTime . "','" . $endDateTime . "'," . $locationID . ",'" . $notes . "'," . $allowAttendance . ");";

	if ($stmt = $conn->prepare($sql)) {
		$stmt->execute();
		$stmt->bind_result($id);
		$stmt->fetch();
		echo $id;
		$stmt->close();
	}

	include '../mysqlLogout.php';
?>