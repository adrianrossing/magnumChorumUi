<?php
	
	include '../mysqlLogin.php';
	include '../getParam.php'; 
	
	$userID = getParam($params, "userID");
	$eventID = getParam($params, "eventID");
	$absenceTypeID = getParam($params, "absenceTypeID");
	$lateArrivalTime = getParam($params, "lateArrivalTime");
	///////
	$actionID = getParam($params, "actionID");
	$enteredByUserID = getParam($params, "enteredByUserID");
	$comment = getParam($params, "comment");

	$sql = "CALL SaveAbsence(" . $userID . ", " . $eventID . ", " . $absenceTypeID . ", " . $lateArrivalTime . ");";

	if ($stmt = $conn->prepare($sql)) {
		$stmt->execute();
		$stmt->bind_result($absenceId);
		$stmt->fetch();
	
		$sql = "CALL SaveAbsenceAction(" . $absenceId . "," . $actionID . "," . $enteredByUserID . ");";
		if ($stmt = $conn->prepare($sql)) {
			$stmt->execute();
			$stmt->bind_result($id);
			$stmt->fetch();

			$sql = "CALL SaveAbsenceComment(" . $absenceId . ",'" . $comment . "'," . $enteredByUserID . ");";
			if ($stmt = $conn->prepare($sql)) {
				$stmt->execute();
				$stmt->bind_result($id2);
				$stmt->fetch();
				echo $absenceId;
				$stmt->close();
			}		

			$stmt->close();
		}

		$stmt->close();
	}

	include '../mysqlLogout.php';
?>