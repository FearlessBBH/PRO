<?php
header("Cache-Control: no-cache, must-revalidate");
header("Expires: Sat, 26 Jul 1997 05:00:00 GMT");
header("Content-type: application/json;charset=utf-8");

if (!isset($_REQUEST['username'])) {
    exit;
}

$success = false;

require_once 'db.php';

$user = $_REQUEST['username'];

$query = "insert tt2 set username = ?";
$statement = $db_connection->prepare($query);
$result = $statement->execute(array($user));

if (!$result) {
    exit;
} else {
    $success = true;
}

$echo = array('success' => $success, 'username' => $user);

// output json
echo myEcho($echo);
function myEcho(&$what)
{
    return json_encode($what);
}


?>