<?php
    header("Content-type:text/html;charset=utf-8");
    // var_dump($_POST);
    $response_Date = array("code" => 0,"message" => "");
    $log_tel = $_POST['log_tel'];
    $log_pwd = $_POST['log_pwd'];
    $conn = mysqli_connect("localhost:3306","root","root");
    if(!$conn){
        $response_Date['code'] = 1;
        $response_Date['message'] = "连接失败";
        echo json_encode($response_Date);
        exit;

    }
        mysqli_set_charset($conn,"utf8");
		mysqli_select_db($conn,"innisfree");
$result = mysqli_query($conn,"SELECT * FROM login WHERE passWord = '{$log_pwd}' and  userTel = {$log_tel}");
        $arr = array();
        while($obj = mysqli_fetch_assoc($result)){
            array_push($arr,$obj);
        }	
    if(!$arr){
        $response_Date['code'] = 2;
        $response_Date['message'] = "登录失败";
        echo json_encode($response_Date);
        
    }else{
        
        echo json_encode($arr);
    }
    
	mysqli_close($conn);
?>




      