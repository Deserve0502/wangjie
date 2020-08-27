<?php
	header("Content-type:text/html;charset=utf-8");
	$conn = mysqli_connect("localhost:3306","root","root");
	$pageSize = $_GET['pageSize'];
    $page1 = $_GET['page'];
	$page = ($page1-1)*$pageSize;
	// print($page);
	if($conn){
    mysqli_select_db($conn,"innisfree");
    
	$result = mysqli_query($conn,"SELECT * from active limit $page,$pageSize");
	$arr = array();
	while($obj = mysqli_fetch_assoc($result)){
		array_push($arr,$obj);
    }	
    // printf("Error: %s\n", mysqli_error($conn));
    echo json_encode($arr);
    
	//4.关闭
	mysqli_close($conn);
}
?>