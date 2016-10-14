<?php
	
	include '../mysqlLogin.php';
	include '../getParam.php'; 
	
	$absenceID = getParam($params, "absenceID");
	$comment = getParam($params, "comment");
	$enteredByUserID = getParam($params, "enteredByUserID");

	$sql = "CALL SaveAbsenceComment(" . $absenceID . ",'" . $comment . "'," . $enteredByUserID . ");";

	if ($stmt = $conn->prepare($sql)) {
		$stmt->execute();
		$stmt->bind_result($id);
		$stmt->fetch();
		echo $id;
		$stmt->close();
	}

	include '../mysqlLogout.php';
?>