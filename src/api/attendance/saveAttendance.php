<?php
	
	include '../mysqlLogin.php';

	$userID = 1;
	$eventID = 1;
	$attendanceStatusID = 1;
	$enteredByUserID = 1;

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