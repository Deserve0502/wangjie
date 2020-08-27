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
    $result1 = mysqli_query($conn,"SELECT * FROM shopcar WHERE userId={$user_id} AND goods_id ={$goods_id}");
    if (!$result1){
        printf("Error: %s\n",mysqli_error($conn));
    }
   
    $res = mysqli_num_rows($result1);
    if($res!=0) {
    $result2 = mysqli_query($conn,"UPDATE shopcar set count=count+1 WHERE userId={$user_id} AND goods_id ={$goods_id} ");
  
    } 
    else{ 
	$result = mysqli_query($conn,"INSERT INTO shopcar(goods_id,userId) VALUES({$goods_id},{$user_id})");
  
}
    $response_Date['code'] = 3;
    $response_Date['message'] = "添加成功";
    echo json_encode($response_Date);
    
    
	mysqli_close($conn);
?>