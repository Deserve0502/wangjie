
let obanul = document.querySelector(".banner ul");
let obanner = document.querySelector(".banner");
let oprospan = document.querySelector(".prospan");
let obanli = document.querySelectorAll(".banner ul li");
let obanpre = document.querySelector(".banpre");
let obanaft = document.querySelector(".banaft");
obanul.style.left = "-1536px";


    let time_ban = AutomaticRotation(obanul,1536,4,oprospan,6000,30);
  
    obanpre.onclick = function(){
        clearInterval(time_ban);
        if(obanul.offsetLeft%1536==0){
            oprospan.style.width = "0px";
        if(obanul.offsetLeft==0){
            obanul.style.left = -(1536*4)+"px";
        }
        startMova(obanul,obanul.offsetLeft + 1536);
        clearInterval(timer1);
        timer1 = setInterval(() => {
            if(obanul.offsetLeft==-((4+1)*1536) ||(obanul.offsetLeft<-((4+1)*1536) && obanul.offsetLeft>-((4+2)*1536))){
                obanul.style.left = - 1536 +"px";
        }
            startMova(obanul,obanul.offsetLeft - 1536);
            oprospan.style.width = "0px";
        
        }, 6000);
    }
    } 
    obanaft.onclick = function(){
    clearInterval(time_ban);
    if(obanul.offsetLeft%1536==0){
        oprospan.style.width = "0px";
        if(obanul.offsetLeft==-((4+1)*1536)  ||(obanul.offsetLeft<-((4+1)*1536) && obanul.offsetLeft>-((4+2)*1536))){
            obanul.style.left = (-1536 + "px");
                        }
    startMova(obanul,obanul.offsetLeft - 1536);
    clearInterval(timer1);
    timer1 = setInterval(() => {
        if(obanul.offsetLeft==-((4+1)*1536)  ||(obanul.offsetLeft<-((4+1)*1536) && obanul.offsetLeft>-((4+2)*1536))){
            obanul.style.left = (-1536 + "px");
                        }
        startMova(obanul,obanul.offsetLeft - 1536);
        oprospan.style.width = "0px";
       
    }, 6000);
    
}
}

    



let olike_ul = document.querySelector(".like_ul");
let olike_pre = document.querySelector(".like_pre");
let olike_aft = document.querySelector(".like_aft");
let ls = localStorage;
olike_aft.onclick = function(){
    if(olike_ul.offsetLeft >= -5056){
        if(olike_ul.offsetLeft%389==0){
    startMova( olike_ul, olike_ul.offsetLeft - 389);
    }
}
}
olike_pre.onclick = function(){
    if(olike_ul.offsetLeft <=-1 ){
        if(olike_ul.offsetLeft % 389==0){
    startMova( olike_ul, olike_ul.offsetLeft + 389);
    }
}
}





let oprotext1 = document.querySelector(".protext span");
let ostart = document.querySelector(".start_bg");
let omain1KO = document.querySelector(".main1-KOLSPICKS");
let omain1div = omain1KO.querySelectorAll("div");
let omain2TO = document.querySelector(".main2-TOPIC");
let omain2div = omain2TO.querySelectorAll("div");
let omain2 = document.querySelector(".main2");
let omain3YO = document.querySelector(".main3YOULIKE");
let omain3YOdiv =  omain3YO.querySelectorAll("div");
let omain2Ul = omain2.querySelector("ul");
let oHot = document.querySelector(".Hot");
let oHot_i = oHot.querySelectorAll("i");
let arrmain1 = omain1div[0].innerHTML;
let arrmain2 = omain2div[0].innerHTML;
let arrHot_i = oHot_i[0].innerHTML;
let arrmain3 =omain3YOdiv[0].innerHTML;
omain1div[0].innerHTML = "";
omain2div[0].innerHTML = "";
omain3YOdiv[0].innerHTML = "";
oHot_i[0].innerHTML = "";
let obanner_hot = document.querySelector(".banner_hot");
let ohot_ul =  obanner_hot.querySelector("ul");
let oli = ohot_ul.querySelectorAll("li");
let ohot_pre = document.querySelector(".hot_pre");
let ohot_aft = document.querySelector(".hot_aft");
let oprospan1 = document.querySelector(".prospan1");
ohot_ul.style.left = "-1217px";
let flag1 = true;
let flag2 = true;   
let flag3 = true;
let flag4 = true;
// setTimeout(function(){
//     ostart.style.display = "none";
// },3000);     







window.addEventListener("scroll",function(){
let Top = document.body.scrollTop || document.documentElement.scrollTop;

    if(Top>=450 && flag1==true){
        inset(0,0,omain1div,arrmain1,9);
        setTimeout(function(){
            omain1div[11].style.opacity  = "1";
            omain1div[11].style.translate= "0 10px";
        },1000);
        setTimeout(function(){
            omain1Photo.style.opacity = "1";
            omain1Photo.style.translate = "0 -70px"
        },2000)
        omain1div[10].style.display  = "inline-block";
        omain1div[12].style.display  = "inline-block";
        flag1 = false; 
    }
    if(Top>=1550 && flag2==true){
        inset(0,0,omain2div,arrmain2,5);
        setTimeout(function(){
            omain2Ul.style.opacity = "1";
            omain2Ul.style.scale = "1";
        },1000)
        omain2div[7].style.display  = "inline-block"
        omain2div[6].style.display  = "inline-block";
        flag2 = false; 
    }
    if(Top>=2550 && flag3==true){
            oHot.style.marginTop = "0px";
            inset(0,0,oHot_i,arrHot_i,3);
           
           let time_hot =  AutomaticRotation(ohot_ul,1217,5,oprospan1,3000,15);  
            clickAft(ohot_aft,ohot_ul,1217,5,time_hot,oprospan1,3000);
            clickPre(ohot_pre,ohot_ul,1217,5,time_hot,oprospan1,3000);     
             
            flag3 = false;
        
        }
            if(Top>=3200 && flag4==true){
                inset(0,0,omain3YOdiv,arrmain3,8);
                omain3YOdiv[9].style.display = "inline-block";
                setTimeout(function(){
                    omain3YOdiv[10].style.opacity = "1";
                   
                },2000)
               
                flag4 = false;
            }
});
let omain1Photo = document.querySelector(".main1-photo");
let omain1Phdiv = omain1Photo.querySelectorAll("div");
for(let i = 0;i<7;i++){
    omain1Phdiv[i].style.background = " url(./IMG/FoundImg/"+(i+4)+".jpg) no-repeat center";
    omain1Phdiv[i].style.backgroundSize = "cover";
    
}
let omain2pre = document.querySelector(".main2pre");
let omain2aft = document.querySelector(".main2aft");
let main2flag = true;
omain2aft.onclick = function(){
    if(main2flag==true){
    omain2Ul.style.left = omain2Ul.offsetLeft - 389 + "px";
    console.log(omain2Ul.offsetLeft);
    main2flag=false;
}
}
omain2pre.onclick = function(){
    if(main2flag==false){
    omain2Ul.style.left = omain2Ul.offsetLeft + 389 + "px";
    console.log(omain2Ul.offsetLeft);
    main2flag = true;
    }
}
    


