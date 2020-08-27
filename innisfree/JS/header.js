var osearchbox = document.querySelector(".search>div");
var osearchinput = document.querySelector(".search input");
let oheader_shopcar = document.querySelector(".header_shopcar");
var oTop = document.querySelector(".Top");
osearchinput.onfocus = function(){
    osearchbox.style.display = "block";
    oTop.style.height = "500px";
}
    osearchinput.onblur = function(){
    osearchbox.style.display = "none";
    oTop.style.height = "88px";
}
oheader_shopcar.onclick = function(){
    location.href = "./shopcar.html";
}
showGoodsnum();
function showGoodsnum(){
            myAjax({
                    method:"post",
                    url:"./PHP/header_showGoods.php",
                    date:{
                        user_id:ls.getItem("userid"),
                       
                    },
                    success:function(result){
                        let arr = JSON.parse(result);
                        $(".header_shop").html(arr.length);
                    },
                    error:function(msg){
                        alert(msg);
                    }
                    
                })
                

        }
if(ls.getItem("userid")){
   $(".header_regist").hide();
   $(".header_login").html(ls.getItem("username"));
   $(".button_regist").hide();
   $(".button_login").hide();
   $(".header_user").html(ls.getItem("username"));
   $("section").show();
}else{
    $("section").hide();
}
// $("section").hide();
$(".header_href").click(function(){
    location.href = "./personal.html"

})
$(".index_href").click(function(){
    location.href = "./index.html";
})
        
    
    
