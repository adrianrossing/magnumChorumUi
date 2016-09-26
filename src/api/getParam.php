<?php
	function getParam($p, $v) {
		$ret = null;
	    if (isset($p[$v]) && !empty($p[$v]))
		{
			$ret = $p[$v];
		}
		//WE DO NOT WANT TO THROW ERRORS FOR NULL VALUES. VALIDATION CAN HAPPEN IN UI ON IN STORED PROC. QUERY STRINGS CAN BE NULL. 
	    return $ret;
	}
?>