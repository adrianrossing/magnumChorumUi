<?php
	
	include '../mysqlLogin.php';
	include '../getParam.php'; 
	
	$boardID = getParam($params, "boardID");
	$userID = getParam($params, "userID");

	$sql = "CALL SaveBoardLike" . $boardID . "," . $userID . ");";

	if ($stmt = $conn->prepare($sql)) {
		$stmt->execute();
		$stmt->bind_result($id);
		$stmt->fetch();
		echo $id;
		$stmt->close();
	}

	include '../mysqlLogout.php';
?>