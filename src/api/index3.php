<?php
 	// header("Access-Control-Allow-Origin: *");


	$username="intranetmc_intranet";
	$password="w#7^Sqv#DyxX";
	$database="intranetmc_intranet";

	mysql_connect(localhost,$username,$password);
	@mysql_select_db($database); //or echo( "Unable to select database");

	// $data = array(
	// 	array('id' => '1','first_name' => 'Cynthia'),
	// 	array('id' => '2','first_name' => 'Keith'),
	// 	array('id' => '3','first_name' => 'Robert'),
	// 	array('id' => '4','first_name' => 'Theresa'),
	// 	array('id' => '5','first_name' => 'Margaret')
	// );
	$query="SELECT * FROM user";
	$result=mysql_query($query);
	echo json_encode($result);
?>