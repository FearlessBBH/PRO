<?php
header("Cache-Control: no-cache, must-revalidate");
header("Expires: Sat, 26 Jul 1997 05:00:00 GMT");
header("Content-type: application/json;charset=utf-8");

if(!isset($_REQUEST['username']) && !isset($_REQUEST['phone']) && !isset($_REQUEST['company'])) exit;

$success=false;
require_once 'db.php';

$user=$_REQUEST['username'];
$phone=$_REQUEST['phone'];
$company=$_REQUEST['company'];

$query = 'insert pjkcxc set username = ?, phone = ?, company = ?';
$statement = $db_connection->prepare($query);
$result = $statement->execute(array($user,$phone,$company));


if (!$result) {
    exit;
} else {
    $success = true;
}

$echo = array('success' => $success, 'username' => $user, 'phone'=> $phone,'company' => $company);

// output json
echo myEcho($echo);
function myEcho(&$what)
{
    return json_encode($what);
}


?>
