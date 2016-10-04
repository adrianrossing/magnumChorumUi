<?php
	
	include '../mysqlLogin.php';
	include '../getParam.php'; 

	$minDateTime = getParam($params, "minDateTime");
	$maxDateTime = getParam($params, "maxDateTime");

	$sql = "CALL GetEvents(";
	if ($minDateTime != null)
	{
		$sql = $sql . "'" . $minDateTime . "',";
	}
	else 
	{
		$sql = $sql . "null,";
	}
	if ($maxDateTime != null)
	{
		$sql = $sql . "'" . $maxDateTime . "');";
	}
	else 
	{
		$sql = $sql . "null);";
	}

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