<?php
header("Cache-Control: no-cache, must-revalidate");
header("Expires: Sat, 26 Jul 1997 05:00:00 GMT");
header("Content-type: application/json;charset=utf-8");

if (!isset($_REQUEST['nam'])) exit;
$success = false;

require_once 'db.php';


$nam = $_REQUEST['nam'];


$query = "insert test set name = ?";
$statement = $db_connection->prepare($query);
$result = $statement->execute(array($nam));

if (!$result) {
    exit;
}else{
    $success = true;
}




$echo = array('success'=>$success,'name'=>$nam);


// output json
echo myEcho($echo);


function myEcho(&$what)
{
    return json_encode($what);
}


?>