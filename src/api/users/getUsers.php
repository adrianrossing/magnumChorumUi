<?php
	
	include '../mysqlLogin.php';

	$sql = "SELECT * FROM user";
	$result = $conn->query($sql);

	if ($result->num_rows > 0) {
	    
		$rows = array();
		while($r = mysqli_fetch_assoc($result)) {
		    $rows[] = $r;
		}
		echo json_encode($rows);
	} else {
	    echo "0 results";
	}

	include '../mysqlLogout.php';
?>