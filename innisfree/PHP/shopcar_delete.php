<?php
    header("Content-type:text/html;charset=utf-8");
    $response_Date = array("code" => 0,"message" => "");
    $goods_id = $_POST['goods_id'];
   
    $user_id = $_POST['user_id'];
    $conn = mysqli_connect("localhost:3306","root","root");
    if(!$conn){
        $response_Date['code'] = 1;
        $response_Date['message'] = "连接失败";
        echo json_encode($response_Date);
        exit;

    }
        mysqli_set_charset($conn,"utf8");
		mysqli_select_db($conn,"innisfree");
	
	$result = mysqli_query($conn,"delete from shopcar where goods_id = {$goods_id} and userId = {$user_id}");
    if(!$result){
        $response_Date['code'] = 2;
        $response_Date['message'] = "删除失败";
        echo json_encode($response_Date);
        printf("Error: %s\n", mysqli_error($conn));
    }else{
        $response_Date['code'] = 3;
        $response_Date['message'] = "删除成功";
        echo json_encode($response_Date);
    }
    
	mysqli_close($conn);
?>