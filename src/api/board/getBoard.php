<?php
	
	include '../mysqlLogin.php';

	$sql = "CALL GetBoard();";
	$result = $conn->query($sql);

	if ($result->num_rows > 0) {
	    
		$rows = array();
		$final = array();
		while($r = mysqli_fetch_assoc($result)) {
		    $rows[] = $r;
		}

		foreach($rows as $b) {
			if ($b["isParent"])
			{
				$final[$b["boardID"]] = $b;
				$final[$b["boardParentID"]]["children"] = array();
			}
			else
			{
				$final[$b["boardParentID"]]["children"][] = $b;
			}
		}

		echo json_encode($final);
	} else {
	    echo "0 results";
	}

	include '../mysqlLogout.php';
?>





