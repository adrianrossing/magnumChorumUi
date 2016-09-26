<?php
	
	include '../mysqlLogin.php';
	include '../getParam.php'; 
	
	$userID = getParam($params, "userID");
	$eventID = getParam($params, "eventID");
	$absenceTypeID = getParam($params, "absenceTypeID");

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