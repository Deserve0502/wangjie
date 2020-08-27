<?php
    header("Content-type:text/html;charset=utf-8");
    // var_dump($_POST);
    $response_Date = array("code" => 0,"message" => "");
    $res_name = $_POST['res_name'];
    $conn = mysqli_connect("localhost:3306","root","root");
    if(!$conn){
        $response_Date['code'] = 1;
        $response_Date['message'] = "连接失败";
        echo json_encode($response_Date);
        exit;

    }
        mysqli_set_charset($conn,"utf8");
		mysqli_select_db($conn,"innisfree");
        $fd_reslut = mysqli_query($conn,"select * from login where userName = '$res_name'");
        $rows = mysqli_num_rows($fd_reslut);
        if($rows == 1){
        $response_Date['code'] = 4;
        $response_Date['message'] = "用户名已经被创建";
        echo json_encode($response_Date);
        }else{
        $response_Date['code'] = 1;
        $response_Date['message'] = "无此用户名";
        echo json_encode($response_Date);
        }
   
    
	mysqli_close($conn);
?>