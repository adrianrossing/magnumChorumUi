<?php
	
	include '../mysqlLogin.php';
	include '../getParam.php'; 
	
	$enteredByUserID = getParam($params, "enteredByUserID");
	$enteredDateTime = getParam($params, "enteredDateTime");
	$boardParentID = getParam($params, "boardParentID");
	$boardIsParent = getParam($params, "boardIsParent");
	$comment = getParam($params, "comment");

	$sql = "CALL SaveBoard(" . $enteredByUserID . ",'" . $enteredDateTime . "',"  $boardParentID . "'," . $boardIsParent . ",'" . $comment . "');";

	if ($stmt = $conn->prepare($sql)) {
		$stmt->execute();
		$stmt->bind_result($id);
		$stmt->fetch();
		echo $id;
		$stmt->close();
	}

	include '../mysqlLogout.php';
?>




SaveBoard`(enteredByUserID INT, enteredDateTime DATETIME, boardParentID INT, boardIsParent BIT, comment VARCHAR(1000))
