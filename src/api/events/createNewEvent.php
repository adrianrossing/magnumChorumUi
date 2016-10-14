<?php
	
	include '../mysqlLogin.php';
	include '../getParam.php'; 
	
	$eventName = getParam($params, "eventName");
	$beginDateTime = getParam($params, "beginDateTime");
	$endDateTime = getParam($params, "endDateTime");
	$locationID = getParam($params, "locationID");
	$notes = getParam($params, "notes");
	$allowAttendance = getParam($params, "allowAttendance");

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