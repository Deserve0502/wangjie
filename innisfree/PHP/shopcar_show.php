<?php
	header("Content-type:text/html;charset=utf-8");
    $conn = mysqli_connect("localhost:3306","root","root");
    $user_id = $_GET['user_id'];
	if($conn){
    mysqli_select_db($conn,"innisfree");
    $result1 = mysqli_query($conn,"DELETE FROM shopcar WHERE  shopcar.count = 0 AND userId = {$user_id}");
	$result = mysqli_query($conn,"SELECT
    shopcar.count,
    goods.goods_id,
    goods.name,
    goods.price,
    goods.image,
    goods.num
    FROM
    login
    INNER JOIN shopcar ON shopcar.userId = login.userId
    INNER JOIN goods ON shopcar.goods_id = goods.goods_id
    WHERE login.userId= {$user_id}
    GROUP BY goods.goods_id

    ");
	$arr = array();
	while($obj = mysqli_fetch_assoc($result)){
		array_push($arr,$obj);
    }	
    echo json_encode($arr);
    
	//4.关闭
	mysqli_close($conn);
}
?>