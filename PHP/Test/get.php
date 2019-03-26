<?php
header("Cache-Control: no-cache, must-revalidate");
header("Expires: Sat, 26 Jul 1997 05:00:00 GMT");
header('Content-Type: text/html; charset=utf-8');

require_once 'db.php';
$query = "select username from tt2";
$statement = $db_connection->prepare($query);
$result = $statement->execute();
$data = $statement->fetchAll();
function myEcho(&$what)
{
    return json_encode($what);
}
$data = myEcho($data);
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <title></title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="css/main.css" />
    <script src="js/jquery-1.11.0.min.js"></script>
</head>

<body>
    <div class="container"> 
        <div class="column">
                <div class="items">的法师法</div>
                <div class="items resu"></div>
            </div>
        </div>
    </div>
    <script type="text/javascript">
        let data = <?php echo $data; ?>;
        for(let i=0;i<data.length;i++){
            $(".resu").append('<div>'+ data[i].username+'</div>');
        }
    </script>
</body>

</html>