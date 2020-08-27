let shopArr = new Array();
let ls = localStorage;
// let oul = $(".show");

loadGoods();
function loadGoods(){
    myAjax({
         type:"get",
         url:"./PHP/shopcar_show.php",
         date:{
            user_id:ls.getItem("userid"),
         }, 
         success:function(result){
             let arr = JSON.parse(result);
            //  count = arr.count;
             let str = ``;
             for(let i = 0;i<arr.length;i++){
                //  let sum = arr[i].price * 1;
                 str += `<li class="goods_list">
                        <span class="iconfont chose">&#xe641;</span>
                        <span class="iconfont is">&#xe605;</span>
                        <div class="goods_img">${arr[i].image}</div>
                        <div class="goods_Intro">
                        <p class="intro">${arr[i].name}</p>
                        <p class="spec">22222</p>
                        </div>
                          <div class="subprice">￥<span class="price">${arr[i].price}</span></div> 
                            <div class="number">
                                <button class="reduce">-</button>
                                <span class="num">${arr[i].count}</span>
                                <button class="add">+</button>
                            </div>
                            <div >￥<span class="price_total">${arr[i].price * arr[i].count}</span></div>
                            <div class="opt">
                                <p>收藏<span class="iconfont favorites">&#xe601;</span></p>
                                <p>删除<span class="iconfont delete">&#xe73f;</span></p>
                            </div>
                        </li>`;
                
                    shopArr.push(arr[i].goods_id);
                   
                    
                 }
                
                 $(".show").html(str);
                 getAdd(); getRedu();del();totalPrice();totalNumber();chose();notchose(); choseAll();chose_notall_check();chose_delete();
                 
         }
         
 });
}
function getAdd(){
    let obuttonAdd = document.querySelectorAll(".add");
    for(let i = 0;i<obuttonAdd.length;i++){
        obuttonAdd[i].onclick = function(){
            // notchoseArr = notchoseArr.filter(function(item) {
            //     return item != i;
            //  });
            //  console.log(notchoseArr);
            // $(".chose").eq(i).show();
            myAjax({
                    method:"post",
                    url:"./PHP/shopcar_insert.php",
                    date:{
                        goods_id:shopArr[i],
                        user_id:ls.getItem("userid"),
                       
                    },
                    success:function(result){
                        let arr = JSON.parse(result);
                        if(arr.code==2){
                            alert("添加失败");
                        }
                        if(arr.code==3){
                            numberAdd(i);
                            Subtotal(i);
                            totalPrice();
                            totalNumber();
                        }
                        
                    },
                    error:function(msg){
                        alert(msg);
                    }
                    
                })
                

        }
        
    }
    
}
function getRedu(){
    let obuttonRedu = document.querySelectorAll(".reduce");
   
    for(let i = 0;i<obuttonRedu.length;i++){
        obuttonRedu[i].onclick = function(){
            // notchoseArr = notchoseArr.filter(function(item) {
            //     return item != i;
            //  });
            //  console.log(notchoseArr);
            // $(".chose").eq(i).show();
            myAjax({
                    method:"post",
                    url:"./PHP/shopcar_reduce.php",
                    date:{
                        goods_id:shopArr[i],
                        user_id:ls.getItem("userid"),
                    },
                    success:function(result){
                        let arr = JSON.parse(result);
                        if(arr.code==2){
                            alert("添加失败");
                        }
                        if(arr.code==3){
                            numberRedu(i);
                            Subtotal(i);
                            totalPrice();
                            totalNumber();
                        }
                        
                    },
                    error:function(msg){
                        alert(msg);
                    }
                    
                })
                

        }
    }
    
}
function delGoods(i){
    let obuttonRedu = document.querySelectorAll(".reduce");
    myAjax({
                    method:"post",
                    url:"./PHP/shopcar_delete.php",
                    date:{
                        goods_id:shopArr[i],
                        user_id:ls.getItem("userid"),
                    },
                    success:function(result){
                        let arr = JSON.parse(result);
                        if(arr.code==2){
                            alert("删除失败");
                        }
                        if(arr.code==3){
                        //    otr[i].remove();
                           location.reload();
                        }
                        
                    },
                    error:function(msg){
                        alert(msg);
                    }
                    
                })
                
}
function numberAdd(i){
    let onumber = document.querySelectorAll(".num");
    onumber[i].innerHTML = Number(onumber[i].innerHTML) + 1;
}
function numberRedu(i){
    let onumber = document.querySelectorAll(".num");
    
    if(onumber[i].innerHTML >0){
     onumber[i].innerHTML = onumber[i].innerHTML- 1;
    }else{
     delGoods(i);
    }
}
function del(){
 let odelete = document.querySelectorAll(".delete");
     for(let i = 0;i<odelete.length;i++){
         odelete[i].onclick = function(){
             if(confirm("确定要删除吗？")){
                 delGoods(i);
             }
             
             
         }
     }
     
     
 }
function Subtotal(i){
    let oSubtotal = document.querySelectorAll(".price_total");
    let onumber = document.querySelectorAll(".num");
    let oprice = document.querySelectorAll(".price");
    oSubtotal[i].innerHTML =  onumber[i].innerHTML * oprice[i].innerHTML;
  }
function totalPrice(){
    let ototalPrice = document.querySelector(".total_Price");
    let oSubtotal = document.querySelectorAll(".price_total");
    ototalPrice.innerHTML = 0;
    for(let i = 0 ;i<oSubtotal.length;i++){
        ototalPrice.innerHTML = Number(oSubtotal[i].innerHTML) + Number(ototalPrice.innerHTML);
}
    for(let j = 0;j<notchoseArr.length;j++){
        ototalPrice.innerHTML =Number(ototalPrice.innerHTML) - Number(oSubtotal[notchoseArr[j]].innerHTML);
    }
}
function totalNumber(){
   let ochose_num = document.querySelector(".chose_num");
   let onum = document.querySelectorAll(".num");
   ochose_num.innerHTML = 0;
    for(let i = 0 ;i<onum.length;i++){
        ochose_num.innerHTML = Number(onum[i].innerHTML) + Number(ochose_num.innerHTML);
}
    for(let j = 0;j<notchoseArr.length;j++){
        ochose_num.innerHTML =Number(ochose_num.innerHTML) - Number(onum[notchoseArr[j]].innerHTML);
    }
}
// $(".is").click(function(){
//     alert(1);
//     // $(".chose").hide();
// })
// $(".is").css("color","red");
let notchoseArr = new Array();
let notchoseitem;
let choseArr = new Array();
function notchose(){
    let ochose = document.querySelectorAll(".chose");
    let oprice_total = document.querySelectorAll(".price_total");
    let ototal_Price = document.querySelector(".total_Price");
    let ochose_num = document.querySelector(".chose_num");
    let onum = document.querySelectorAll(".num");
    
    for(let i = 0;i<ochose.length;i++){
        ochose[i].onclick = function(){
            notchoseArr.push(i);
            notchoseitem = Array.from(new Set(notchoseArr));
            notchoseArr = notchoseitem;
           
          ochose[i].style.display = "none";
          ototal_Price.innerHTML = ototal_Price.innerHTML - oprice_total[i].innerHTML;
          ochose_num.innerHTML = ochose_num.innerHTML - onum[i].innerHTML;

        }
    }
}
function chose(){
    let ois = document.querySelectorAll(".is");
    let ochose = document.querySelectorAll(".chose");
    let oprice_total = document.querySelectorAll(".price_total");
    let ototal_Price = document.querySelector(".total_Price");
    let ochose_num = document.querySelector(".chose_num");
    let onum = document.querySelectorAll(".num");
    for(let i = 0;i<ois.length;i++){
        ois[i].onclick = function(){
            notchoseArr = notchoseArr.filter(function(item) {
                    return item != i;
                 });
                 
            ochose[i].style.display = "block";
            ototal_Price.innerHTML =Number(ototal_Price.innerHTML) +Number(oprice_total[i].innerHTML);
            ochose_num.innerHTML =Number(ochose_num.innerHTML) +Number(onum[i].innerHTML);
        }
    }
}
function choseAll(){
    $(".chose_all").click(function(){
        let priceSum = 0;
        let numSum = 0;
        $(".chose").show();
        $(".check").show();
        for(let i = 0;i<oprice_total.length;i++){
            priceSum = Number(priceSum) + Number(oprice_total[i].innerHTML);
            numSum = Number(numSum) + Number(onum[i].innerHTML);
        }
      $(".total_Price").html(priceSum); 
      $(".chose_num").html(numSum);
      notchoseArr.length = 0;
    })
    let oprice_total = document.querySelectorAll(".price_total");
    let onum = document.querySelectorAll(".num");
    let priceSum = 0;
    let numSum = 0;
    
    
    //  console.log(notchoseArr);
     
   
}
function chose_notall_check(){
    $(".check").click(function(){
        let oli = $(".show").find("li");
        for(let i = 0;i<oli.length;i++){
            notchoseArr.push(i);
        }
        console.log(notchoseArr);
        $(".check").hide();
        $(".chose").hide();
        $(".total_Price").html(0); 
        $(".chose_num").html(0);
    })
}
function chose_delete(){
    let ochose_delete = document.querySelector(".chose_delete");
    ochose_delete.onclick = function(){
            let oli = $(".show").find("li");
            for(let i = 0;i<oli.length;i++){
                choseArr.push(i);
            }
            for(let j = 0;j<notchoseArr.length;j++){
            choseArr = choseArr.filter(function(item) {
                return item != notchoseArr[j];
                    });
                }
                if(confirm("你确定要删除吗？")){
        for(let i = 0;i<choseArr.length;i++){
            delGoods(choseArr[i]);
        }
    }
              
}}
// let ocontineShop = document.querySelector(".contineShop");
// // ocontineShop.onclick = function(){


// //     alert(1);
// //     location.href = "./shop.html";
// // }
// console.log(ocontineShop.innerHTML);