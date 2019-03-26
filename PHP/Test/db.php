<?php
define('DB_HOSTNAME', '101.69.248.38');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', 'db123456');
define('DB_DATABASE', 'test');

try {
    $db_connection = new PDO('mysql:host=' . DB_HOSTNAME . ';dbname=' . DB_DATABASE, DB_USERNAME, DB_PASSWORD, array(PDO::ATTR_PERSISTENT => false));
    $db_connection->exec("set names 'utf8'");
} catch (Exception $e) {
    $db_connection = null;
}
function db_close()
{
    global $db_connection;
    $db_connection = null;
}
?>