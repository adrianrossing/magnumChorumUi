<?php
	
	include '../mysqlLogin.php';

	$userID = 1;
	$eventID = 1;
	$absenceTypeID = 1;

	$sql = "CALL SaveAbsence(" . $userID . ", " . $eventID . ", " . $absenceTypeID .");";

	if ($stmt = $conn->prepare($sql)) {
		$stmt->execute();
		$stmt->bind_result($id);
		$stmt->fetch();
		echo $id;
		$stmt->close();
	}

	include '../mysqlLogout.php';
?>