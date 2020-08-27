<?php
    header("Content-type:text/html;charset=utf-8");
    // var_dump($_POST);
    $response_Date = array("code" => 0,"message" => "");
 
    $res_tel = $_POST['res_tel'];
    $res_pwd = $_POST['res_pwd'];
    $res_name = $_POST['res_name'];
    $res_bir = $_POST['res_bir'];
    $addTime = $_POST['addTime'];
    $conn = mysqli_connect("localhost:3306","root","root");
    if(!$conn){
        $response_Date['code'] = 1;
        $response_Date['message'] = "连接失败";
        echo json_encode($response_Date);
        exit;

    }
        mysqli_set_charset($conn,"utf8");
		mysqli_select_db($conn,"innisfree");
    
        // $fd_reslut = mysqli_query($conn,"select * from login where userName = '$res_name'");
        // $rows = mysqli_num_rows($fd_reslut);
        // if($rows == 1){
        // $response_Date['code'] = 4;
        // $response_Date['message'] = "用户名已经被创建";
        // echo json_encode($response_Date);
        // }
    $result = mysqli_query($conn,"INSERT INTO login(userName,passWord,addTime,userBirth,userTel) VALUES('{$res_name}',{$res_pwd},'{$addTime}','{$res_bir}',{$res_tel})");
    

    if(!$result){
        $response_Date['code'] = 2;
        $response_Date['message'] = "创建失败";
        // echo json_encode($response_Date);
        printf("Error: %s\n", mysqli_error($conn));
        echo json_encode($response_Date);
    }else{
        $response_Date['code'] = 3;
        $response_Date['message'] = "创建成功";
        echo json_encode($response_Date);
    }
    
	mysqli_close($conn);
?>