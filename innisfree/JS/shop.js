 
  $(".nav_left").find("li").eq(0).hover(function(){
    $(".nav_right1").fadeTo(500,1);
      $(".nav_right2").hide();
     $(".nav_right3").hide();
     $(".nav_right4").hide();
  });
  $(".nav_left").find("li").eq(1).hover(function(){
      $(".nav_right2").fadeTo(500,1);
      $(".nav_right1").hide();
     $(".nav_right3").hide();
     $(".nav_right4").hide();
  });
  $(".nav_left").find("li").eq(2).hover(function(){
  
      $(".nav_right3").fadeTo(500,1);
      $(".nav_right1").hide();
     $(".nav_right2").hide();
     $(".nav_right4").hide();
  });
  $(".nav_left").find("li").eq(3).hover(function(){
      $(".nav_right4").fadeTo(500,1);
      $(".nav_right2").hide();
     $(".nav_right3").hide();
     $(".nav_right1").hide();
    
  });
 $(".shop_ban img,.ph,.banner_nav > p,.empty").mouseover(function(){
    $(".nav_right2").hide();
     $(".nav_right3").hide();
     $(".nav_right1").hide();
     $(".nav_right4").hide();
 })


let oban_li_nav = $(".shop_banner ol li");
let iNow = 0;
let shop_ban_time = null;

shop_ban_time = setInterval(function(){ 
    tab();
    if(iNow>=4){
        iNow = -1;
    }
    iNow++;
},3000)
oban_li_nav.click(function(){
    iNow = $(this).index();
    tab();
   
   
});
tab();
function tab(){
    oban_li_nav.attr("class","").eq(iNow).attr("class","red");
    $(".shop_ban").animate({
        left:-1900 * iNow,
    },500)
}

let iph= 0;
let ify = 0;
let ifs = 0;
let phTime = null;
let fyTime = null;
let fsTime = null;

shopTime(".ph_ul",".lm_pre",".lm_aft");
preClic(".lm_pre",".ph_ul",iph);
aftClic(".lm_aft",".ph_ul",iph);
shopTime1(".fy_ul",".fy_pre",".fy_aft",ify);
preClic(".fy_pre",".fy_ul",ify);
aftClic(".fy_aft",".fy_ul",ify);
shopTime2(".fs_ul_total",".fs_pre",".fs_aft",ifs);
preClic(".fs_pre",".fs_ul_total",ifs);
 aftClic(".fs_aft",".fs_ul_total",ifs);
 let ls = localStorage;
let olim_shop = $(".lm_shop");
for(let i = 0;i<olim_shop.length;i++){
    olim_shop[i].onclick = function(){
        if(ls.getItem("userid")){
       
        myAjax({
            method:"post",
            url:"./PHP/shopcar_insert.php",
            date:{
                goods_id:i+1,
                user_id:ls.getItem("userid"),
            },
            success:function(result){
                let arr = JSON.parse(result);
                if(arr.code==3){
                    alert("添加成功");
                    showGoodsnum();
                }
            },
            error:function(msg){
                alert(msg);
            }
            
        })
    }else{
        if(confirm("您还没有登录，请问是否需要登录？")){
            $(".mask").show();
            $(".login").show();
        }
    }
}
}

   