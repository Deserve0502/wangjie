<?php
    header("Content-type:text/html;charset=utf-8");
    // var_dump($_POST);
    $response_Date = array("code" => 0,"message" => "");
    $tel = $_GET['tel'];
    $pwd = $_GET['pwd'];
   
    $conn = mysqli_connect("localhost:3306","root","root");
    if(!$conn){
        $response_Date['code'] = 1;
        $response_Date['message'] = "连接失败";
        echo json_encode($response_Date);
        exit;

    }
        mysqli_set_charset($conn,"utf8");
		mysqli_select_db($conn,"innisfree");
	
	$result = mysqli_query($conn," UPDATE login SET passWord='{$pwd}' WHERE userTel ={$tel}");
    if(!$result){
        $response_Date['code'] = 2;
        $response_Date['message'] = "修改失败";
        echo json_encode($response_Date);
    }else{
        $response_Date['code'] = 3;
        $response_Date['message'] = "修改成功";
        echo json_encode($response_Date);
    }
    
	mysqli_close($conn);
?>