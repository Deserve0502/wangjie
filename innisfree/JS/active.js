$(".act_end").css("border","none");
$(".end").hide();
$(".page").hide();
$(".act_end").click(function(){
    $(".act_ing").css("border","none");
    $(".act_end").css({"border-bottom":"4px solid #004438"});
    $(".ing").hide();
    $(".end").show();
    $(".page").show();
})
$(".act_ing").click(function(){
    $(".act_ing").css({"border-bottom":"4px solid #004438"});
    $(".act_end").css("border","none");
    $(".end").hide();
    $(".ing").show();
    $(".page").hide();
})

let page_num = 1;
$(".act_page").find("div").click(function(){
    page_num = $(this).index() + 1;
    loadGoods();
})

loadGoods();


function loadGoods(){
    myAjax({
         type:"get",
         url:"./PHP/activ_page.php",
         date:{
            page:page_num,
            pageSize:9,
         }, 
         success:function(result){
             let arr = JSON.parse(result);
             let str = ``;
             for(let i = 0;i<arr.length;i++){
              
                 str += ` <li>
                    ${arr[i].image}
                 <div>
                     <span>new</span>
                     <span class="act_text">${arr[i].text}</span>
                     <span>常规活动</span>
                 </div>
             </li>`;
                
                 
             }
             $(".end").html(str);    
                 }
                
                
                
                })   
         }
         
    
        