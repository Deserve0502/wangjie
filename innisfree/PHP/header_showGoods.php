<?php
	header("Content-type:text/html;charset=utf-8");
    $conn = mysqli_connect("localhost:3306","root","root");
    $user_id = $_POST['user_id'];
	if($conn){
    mysqli_select_db($conn,"innisfree");
    
	$result = mysqli_query($conn,"SELECT * FROM shopcar WHERE userId = $user_id;");
	$arr = array();
	while($obj = mysqli_fetch_assoc($result)){
		array_push($arr,$obj);
    }	
    echo json_encode($arr);
    
	//4.关闭
	mysqli_close($conn);
}
?>