<?php
	
	include '../mysqlLogin.php';

	$absenceID = 1;
	$actionID = 1;
	$enteredByUserID = 1;

	$sql = "CALL SaveAbsenceAction(" . $absenceID . "," . $actionID . "," . $enteredByUserID . ");";

	if ($stmt = $conn->prepare($sql)) {
		$stmt->execute();
		$stmt->bind_result($id);
		$stmt->fetch();
		echo $id;
		$stmt->close();
	}


	// $result = $conn->query($sql);

	// if ($result->num_rows > 0) {
	    
	// 	$rows = array();
	// 	while($r = mysqli_fetch_assoc($result)) {
	// 	    $rows[] = $r;
	// 	}
	// 	echo json_encode($rows);
	// } else {
	//     echo "0 results";
	// }

	include '../mysqlLogout.php';
?>