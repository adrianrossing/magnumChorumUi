<?php
	
	include '../mysqlLogin.php';

	$absenceID = 1;
	$enteredByUserID = 1;
	$comment = "test comment";

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