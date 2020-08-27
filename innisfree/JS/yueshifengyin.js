
 function getCookie(key){
            let str = document.cookie;
            let arr = str.split("; ");
            for(let i=0; i<arr.length; i++){
                let item = arr[i].split("=");
                if(item[0] == key){
                    return item[1];
                }
            }
            return ";"
        }
        
function setCookie(key,value,day){
            let d = new Date();
            d.setDate(d.getDate()+day);
            document.cookie = key+"="+value+";expires=" + d;
        }
        
       
function delCookie(key){
           setCookie(key," ",-1);
        }
        
function  myAjax({method="get",url,date,success,error}){
         let xhr;
         if (window.ActiveXObject) {
             xhr = new ActiveXObject("Microsoft.XMLHttp");
            }else{
             xhr =  new XMLHttpRequest();
            }
        if(date){
            date = querystring(date);
         
    }
        if((method=='get' && date)){
            url+="?" + date;
        }
        xhr.open(method,url,true);
            if(method=='get'){
                    xhr.send();
            }else{
                    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
                    xhr.send(date);
            }
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4){
                    if( xhr.status == 200){
                            if(success){
                            success(xhr.responseText);
                            }
            }else{
                    if(error){
                error("Error:" + xhr.status);
            }
           

}
}
        }
}
function querystring(obj){
        let str = '';
        for( let attr in obj){
                str +=  attr + "=" + obj[attr] + "&";
        }
        return str.substring(0,str.length-1);
}   
function startMova(obj,target){
         clearInterval(obj.time);
         obj.time = setInterval(function(){
         let speed = (target-obj.offsetLeft)/3;
         speed = speed>0?Math.ceil(speed):Math.floor(speed);
         obj.style.left = obj.offsetLeft + speed + "px";
            },50);
        }
        
           
function ProgressBarText(obanul,oprotext1){
            if(obanul.offsetLeft==-3072){
            oprotext1.innerHTML = 3;
            }else if(obanul.offsetLeft==-4608){
                    oprotext1.innerHTML = 1;
            }else{
                    oprotext1.innerHTML = 2;
            }
            }
// function ProgressBarText1(obanul,oprotext1){
//                 if(obanul.offsetLeft==-3072){
//                 oprotext1.innerHTML = 1;
//                 }else if(obanul.offsetLeft==-4608){
//                         oprotext1.innerHTML = 2;
//                 }else{
//                         oprotext1.innerHTML = 3;
//                 }
//                 }





function inset(i,j,odiv,arrmain,num){
            let timer = setInterval(function(){ 
            i++;
            if(i==num){
                clearInterval(timer);
                }
            let time =  setInterval(function(){
            odiv[i].innerHTML = arrmain[j];
            j++;
            if(j==i){
                clearInterval(time);
                j=0;
                }
                },20)
            },200);
                }
                


function AutomaticRotation(oul,liWid,sumLi,oprospan1,Times1,times1){
    let time = null;
    time = setInterval(() => {
        if(oul.offsetLeft%liWid==0){
            if(oul.offsetLeft==-((sumLi+1)*liWid)  ||(oul.offsetLeft<-((sumLi+1)*liWid) && oul.offsetLeft>-((sumLi+2)*liWid))){
            oul.style.left = (-liWid + "px");
                        }
     startMova(oul,oul.offsetLeft - liWid);
     oprospan1.style.width = "0px";
                    }
             }, Times1);
    setInterval(function(){
    oprospan1.style.width = parseInt(getComputedStyle(oprospan1,false)["width"])+1+"px";
     },times1);
     return time;
    }

let timer1 = null;
function clickAft(oaft,oul,liWid,sumLi,time_clear,oprospan1,Times1){
    oaft.onclick = function(){
        clearInterval(time_clear);
        if(oul.offsetLeft%liWid==0){
            oprospan1.style.width = "0px";
            if(oul.offsetLeft==-((sumLi+1)*liWid)  ||(oul.offsetLeft<-((sumLi+1)*liWid) && oul.offsetLeft>-((sumLi+2)*liWid))){
                oul.style.left = (-liWid + "px");
                            }
        startMova(oul,oul.offsetLeft - liWid);
        clearInterval(timer1);
        timer1 = setInterval(() => {
            if(oul.offsetLeft==-((sumLi+1)*liWid)  ||(oul.offsetLeft<-((sumLi+1)*liWid) && oul.offsetLeft>-((sumLi+2)*liWid))){
                oul.style.left = (-liWid + "px");
                            }
            startMova(oul,oul.offsetLeft - liWid);
            oprospan1.style.width = "0px";
           
        }, Times1);
        
    }
    }

}

function clickPre(opre,oul,liWid,sumLi,time_clear,oprospan1,Times1){
    opre.onclick = function(){
    clearInterval(time_clear);
    if(oul.offsetLeft%liWid==0){
        oprospan1.style.width = "0px";
    if(oul.offsetLeft==0){
        oul.style.left = -(liWid*sumLi)+"px";
    }
    startMova(oul,oul.offsetLeft + liWid);
    clearInterval(timer1);
    timer1 = setInterval(() => {
        if(oul.offsetLeft==-((sumLi+1)*liWid) ||(oul.offsetLeft<-((sumLi+1)*liWid) && oul.offsetLeft>-((sumLi+2)*liWid))){
            oul.style.left = - liWid +"px";
    }
        startMova(oul,oul.offsetLeft - liWid);
        oprospan1.style.width = "0px";
       
    }, Times1);
}
} 
    }










            class WaterFall{
                createDiv(){
                    for(let i=0; i<12; i++){
                        let owater = document.createElement("div");
                        owaterfall.appendChild(owater);
                        let rnd = Math.round(Math.random()*110+350);
                        owater.style.height = rnd + "px";
                        let oimg = document.createElement("img");
                        owater.appendChild(oimg);
                        oimg.style.width = "100%";
                        oimg.style.height = "75%";
                        oimg.src = "./IMG/FoundImg/"+i+".jpg"
                        let oofficial = document.createElement("p");
                        owater.appendChild(oofficial);
                        let official = `<img src="./IMG/FoundImg/logo.png"> innisfree官方号 <span class = "iconfont aixin">&#xe601;</span><span>1</span>`;
                        oofficial.innerHTML = official;
                        let otext = document.createElement("p");
                        owater.appendChild(otext);
                        let otextarr = ["小肥柴陪你一周无忧无虑","这唇釉颜色美到窒息，还巨显白！✨","夏日美白 大作战！眼看着就变白了~~","心动狙击| 超好看的碎玫瑰色唇釉","你的夏日“鲜”肌正在派送中，请查收！","又欲又仙！这支紫芋柔雾碎玫瑰色是真好看！","冲鸭姐妹们！！这支唇釉让我忍不住为她站街","毛孔瘦身 净澈一夏！","眼看着就变白了！❤","油皮星人一招get哑光磨皮妆面","清清爽爽的夏日补水神器","私人定制粉底液 全天大测评"]
                        otext.innerHTML = otextarr[i];
                    }
                    this.change();
                }
                change(){
                    let n = Math.floor(1280/245);
                    let arrH = [];
                    let owaters = owaterfall.getElementsByTagName("div");
                    for(let i=0; i<owaters.length; i++){
                        if(arrH.length == n){
                            let index = this.findMin(arrH);
                            owaters[i].style.left = index*245 + index*10 + "px";
                            owaters[i].style.top = arrH[index] + 10 + "px";
                            arrH[index] +=owaters[i].offsetHeight + 10;
                        }else{
                            owaters[i].style.top = 0;
                            owaters[i].style.left = i*245 + i*10 + "px";
                            arrH[i] = owaters[i].offsetHeight;
                        }
                    }
                }
                
                findMin(arrH){
                    let minIndex = 0;
                    
                    for(let i=0; i<arrH.length; i++){
                        if(arrH[minIndex]>arrH[i]){
                            minIndex = i;
                        }
                    }
                    return minIndex;
                }
                
                // onscroll(){
                // 	let that = this;
                // 	window.onscroll = function(){
                // 		let _top = document.body.scrollTop || document.documentElement.scrollTop;
                // 		if(_top > 400){
                // 			that.createDiv();
                // 		}
                // 	}
                // }
            }
            function ulTab(a,iph){
                $(a).animate({
                    left:-934 * iph,
                },500)
            }
            function preClic(pre,ul,iph){
            $(pre).click(function(){
                if(iph==0){
                    
                    $(ul).animate({
                        left:0,
                    },500)
                }
                $(".shop_progress span").css("width","105px");
            })
            }
            function aftClic(aft,ul,iph){
            $(aft).click(function(){
                if(iph!=1){
                  
                    $(ul).animate({
                        left:-934,
                    },500)
                }
                $(".shop_progress span").css("width","210px");
            })
            }
            
            function shopTime(ul,pre,aft){
                shop_ul_time = setInterval(function(){
                    iph++;
                    ulTab(ul,iph);
                    if(iph==1){
                        $(".shop_progress span").css("width","210px");
                        $(pre).css("cursor","pointer");
                        $(aft).css("cursor","not-allowed");
                        iph = -1;
                    }else{
                        $(pre).css("cursor","not-allowed");
                        $(aft).css("cursor","pointer");
                        $(".shop_progress span").css("width","105px");
                    }
                },2000);
                }
                function shopTime1(ul,pre,aft,iph){
                    shop_fy_time = setInterval(function(){
                        iph++;
                        ulTab(ul,iph);
                        if(iph==1){
                            $(".shop_progress span").css("width","210px");
                            $(pre).css("cursor","pointer");
                            $(aft).css("cursor","not-allowed");
                            iph = -1;
                        }else{
                            $(pre).css("cursor","not-allowed");
                            $(aft).css("cursor","pointer");
                            $(".shop_progress span").css("width","105px");
                        }
                    },2000);
                    }
                    function shopTime2(ul,pre,aft,iph){
                        shop_fs_time = setInterval(function(){
                            iph++;
                            ulTab1(ul,iph);
                            if(iph==1){
                                $(".shop_progress span").css("width","210px");
                                $(pre).css("cursor","pointer");
                                $(aft).css("cursor","not-allowed");
                                iph = -1;
                            }else{
                                $(pre).css("cursor","not-allowed");
                                $(aft).css("cursor","pointer");
                                $(".shop_progress span").css("width","105px");
                            }
                        },2000);
                        }
                        function ulTab1(a,iph){
                            $(a).animate({
                                
                                left:-934 * iph +10,
                            },500)
                        }
                        