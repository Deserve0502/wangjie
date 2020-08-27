        let omask = document.querySelector(".mask");
        let obutton_login = document.querySelector(".button_login");
        let obutton_regist = document.querySelector(".button_regist");
       
        let oregist = document.querySelector(".regist");
        let ologin = document.querySelector(".login");
        let  ose_seOrme = document.querySelector(".se_seOrme")
        let  ose_seOrme_span = ose_seOrme.querySelectorAll("span");
        let  ose_login = document.querySelector(".se_login");
        let  ome_login = document.querySelector(".me_login");
        let oexit = document.querySelectorAll(".exit");
        let oreturn = document.querySelectorAll(".return");
        let oretrieve = document.querySelector(".retrieve");
        // let oret_ph = document.querySelector(".ret_ph");
        let oret_em = document.querySelector(".ret_em");
        let ose_phOrem = document.querySelector(".se_phOrem");
        let  ose_phOrem_span = ose_phOrem .querySelectorAll("span");
        let ofd_meOrRes = document.querySelector(".fd_meOrRes");
        let ofd_meOrRes_span = ofd_meOrRes.querySelectorAll("span");
        let ofd_res = document.querySelector(".fd_res");
        let ofd_res_span = ofd_res.querySelector("span");
        let ores_username = document.querySelector(".res_username");
        let ore_pwd_1 = document.querySelector(".re_pwd_1");
        let ore_pwd_2 = document.querySelector(".re_pwd_2");
        let ores_birthday = document.querySelector(".res_birthday");
        let ores_ph_same = document.querySelector(".res_ph_same");
        let ores_read = document.querySelector(".res_read");
       

        ose_seOrme_span[0].style.backgroundColor = "#024137";
        ose_seOrme_span[0].style.color = "white";
        ose_phOrem_span[0].style.backgroundColor = "#024137";
        ose_phOrem_span[0].style.color = "white";
        
        ose_seOrme.onclick = function(evt){
                var e = evt || window.event;
                var target = e.target || window.event.srcElement;
                for(let i = 0;i<ose_seOrme_span.length;i++){
                    ose_seOrme_span[i].style.backgroundColor = "white";
                    ose_seOrme_span[i].style.color = "#024137";
                }
                target.style.backgroundColor = "#024137";
                target.style.color = "white";
            }
            ose_phOrem.onclick = function(evt){
                var e = evt || window.event;
                var target = e.target || window.event.srcElement;
                for(let i = 0;i<ose_phOrem_span.length;i++){
                    ose_phOrem_span[i].style.backgroundColor = "white";
                    ose_phOrem_span[i].style.color = "#024137";
                }
                target.style.backgroundColor = "#024137";
                target.style.color = "white";
            }
            ose_seOrme_span[0].onclick = function(){
                ome_login.style.display = "none";
                ose_login.style.display = "block";
                ologin.style.height = "415px";
            }
            ose_phOrem_span[0].onclick = function(){
                oret_em.style.display = "none";
                oret_ph.style.display = "block";
            }
            ose_phOrem_span[1].onclick = function(){
                oret_em.style.display = "block";
                oret_ph.style.display = "none";
            }
            ose_seOrme_span[1].onclick = function(){
                ose_login.style.display = "none";
                ome_login.style.display = "block";
                ome_login.style.height = "313px";
                ologin.style.height = "459px";
            }
            for(let i = 0 ;i<oexit.length;i++){
            oexit[i].onclick = function(){
                omask.style.display = "none";
            } }
            obutton_login.onclick = function(){
                omask.style.display = "block";
                oregist.style.display = "none";
                ologin.style.display = "block";
                oretrieve.style.display = "none";
            } 
            obutton_regist.onclick = function(){
                omask.style.display = "block";
                ologin.style.display = "none";
                oregist.style.display = "block";
                oretrieve.style.display = "none";
            }
            for(let i = 0 ;i<oreturn.length;i++){
            oreturn[i].onclick = function(){
                oregist.style.display = "none";
                ologin.style.display = "block";
                oretrieve.style.display = "none";
            }
            }
            ofd_meOrRes_span[0].onclick = function(){
                oretrieve.style.display = "block";
                ologin.style.display = "none";
            }
            ofd_meOrRes_span[1].onclick = function(){
                oretrieve.style.display = "none";
                ologin.style.display = "none";
                oregist.style.display = "block";
            }
            ofd_res_span.onclick = function(){
                oregist.style.display = "block";
                oretrieve.style.display = "none";
                ologin.style.display = "none";
            }




            let ores_btn = document.querySelector(".res_btn");
            let ores_btn_input = oregist.querySelectorAll("input");
            let flagtel = false;
            let flagpwd = false;
            let flagname = false;
            let flagbir = false;
            let flagread = false;
            let regNum = /^\d+$/;
            let regLetter = /^[a-zA-Z]+$/;
            let regChar = /^[!@#$.]+$/;
            let _regNum = /\d+/;
            let _regLetter = /[a-zA-Z]+/;
            let _regChar = /[!@#$.]+/;

            ores_btn_input[1].onblur = function(){
                let regTel = /^1(3|4|5|6|7|8|9)\d{9}$/;
                if(regTel.test(this.value)){
                    ores_ph_same.innerHTML = "";
                    myAjax({
                    method:"post",
                    url:"./PHP/regist_ph_same.php",
                    date:{
                        res_name: ores_btn_input[1].value,
                    },
                    success:function(result){
                        let arr = JSON.parse(result);
                        if(arr.code==4){
                            ores_ph_same.innerHTML = "此电话号码已被注册";
                            flagtel=false;
                        }
                        if(arr.code==1){
                            ores_ph_same.innerHTML = "";
                            flagtel = true;
                        }
                        ;},
            });
                   
                }else{
                    ores_ph_same.innerHTML = "请输入正确的手机格式";
                    flagtel = false;
                }
            }
            ores_btn_input[3].onblur = function(){
                let regPwd = /^[0-9a-zA-Z\u0000-\u00FF]{6,16}$/;
                if(regPwd.test(this.value)){
                    if(regNum.test(this.value) || regLetter.test(this.value) || 
		            regChar.test(this.value)){
                        ore_pwd_1.innerHTML = "强度弱";
                    }else if(_regNum.test(this.value) && _regLetter.test(this.value) && 
                        _regChar.test(this.value)){
                            ore_pwd_1.innerHTML = "强度强";
                    }else{
                        ore_pwd_1.innerHTML = "强度中等";
                    }
                    flagpwd = true;
                }else if( ores_btn_input[3].value.length<6){
                    ore_pwd_1.innerHTML = "请输入至少长度为6位的密码";
                    flagpwd = false;
                  
                }else{
                    ore_pwd_1.innerHTML = "请输入英文与数字或者半角符号混合的6-16位密码";
                    flagpwd = false;
                }
            }
            ores_btn_input[4].onblur = function(){
                if(ores_btn_input[4].value!=ores_btn_input[3].value){
                    ore_pwd_2.innerHTML = "两次密码不一致";
                    flagpwd = false;
                }else{
                    ore_pwd_2.innerHTML = "";
                }
            }
            ores_btn_input[5].onblur = function(){
                
                if(ores_btn_input[5].value.length>6){
                    ores_username.innerHTML = "请输入长度小于6位的用户名";
                    flagname = false;
                    
                }else{
                    if(ores_btn_input[5].value.length<6){
                        ores_username.innerHTML = "";
                    }
                myAjax({
                method:"post",
                url:"./PHP/regist_same.php",
                date:{
                    res_name: ores_btn_input[5].value,
                },
                success:function(result){
                    let arr = JSON.parse(result);
                    if(arr.code==4){
                        ores_username.innerHTML = "用户名已经被创建";
                        flagname=false;
                    }
                    if(arr.code==1){
                        ores_username.innerHTML = "";
                        flagname = true;
                    }
                    ;},
            });
            }
        }
            ores_btn_input[6].onblur = function(){
                let regBir = /^\d{4}[-]\d{2}[-]\d{2}$/;
                if(regBir.test(this.value)){
                    ores_birthday.innerHTML = "";
                    flagbir = true;
                }else{
                    ores_birthday.innerHTML = "请输入正确的日期格式：例如1999-01-01";
                    flagbir = false;
                }
            }
            ores_btn_input[7].onclick = function(){
            if(ores_btn_input[7].checked==true){
                flagread = true;
                ores_read.innerHTML = "";
            }else if(ores_btn_input[7].checked==false){
                flagread = false;
                ores_read.innerHTML = "请勾选";
            }
        }
        
           
            ores_btn.onclick = function(){
                if(flagread == false){
                        ores_read.innerHTML = "请勾选";
                    }
                if(flagbir==true && flagtel==true && flagpwd==true && flagname ==true &&  flagread == true){
                   
                let d = new Date();
                let year = d.getFullYear(); 
                let month = d.getMonth()+1;
                let date = d.getDate(); 
                let str_date = year + "-" + month + "-" + date;
                myAjax({
                method:"post",
                url:"./PHP/regist.php",
                date:{
                    res_tel:ores_btn_input[1].value,
                    res_pwd:ores_btn_input[4].value,
                    res_name: ores_btn_input[5].value,
                    res_bir:ores_btn_input[6].value,
                    addTime:str_date,
                },
                success:function(result){
                    let arr = JSON.parse(result);
                    if(arr.code==2){
                        alert("创建失败,所有星号为必填项");
                        
                    }
                    if(arr.code==3){
                        alert("创建成功！");
                        
                    }
                },
                error:function(msg){
                    alert(msg);
                }
            });
            for(let i = 0 ;i<ores_btn_input.length;i++){
                ores_btn_input[i].value = null;
            }
            ores_btn_input[7].checked=false;
            setTimeout(function(){
                oregist.style.display = "none";
                ologin.style.display = "block";
                oretrieve.style.display = "none";
            },2000);
        }else{
            alert("请确认所填项是否格式正确")
        }
            }
            let ose_login_input = ose_login.querySelectorAll("input");
            let olog_btn = document.querySelector(".log_btn");
            olog_btn.onclick = function(){
             
                myAjax({
                    method:"post",
                    url:"./PHP/login_ph.php",
                    date:{
                        log_tel:Number(ose_login_input[0].value),
                        log_pwd:ose_login_input[1].value,
                    },
                    success:function(result){
                        let arr = JSON.parse(result);
                        if(arr.code==2){
                            alert("登陆失败");
                            
                        }else{
                            alert("登陆成功");
                            ls.setItem("userid",arr[0].userId);
                            ls.setItem("username",arr[0].userName);
                            location.reload();
                            omask.style.display = "none";
                        }
                    }
                });
            }
            let oret_ph = document.querySelector(".ret_ph");//ul
            let oret_ph_pwd = document.querySelector(".ret_ph_pwd");//i
            let oret_ph_input = oret_ph.querySelectorAll("input");//input
            let oret_ph_btn = document.querySelector(".ret_ph_btn");//button
            oret_ph_btn.onclick = function(){
                if(flag_ret_pwd==true){
                myAjax({
                    method:"get",
                    url:"./PHP/ret_ph.php",
                    date:{
                        tel: oret_ph_input[0].value,
                        pwd:oret_ph_input[4].value,
                    },
                    success:function(result){
                        let arr = JSON.parse(result);
                        if(arr.code==3){
                            alert("修改成功");
                            setTimeout(function(){  
                                oregist.style.display = "none";
                                ologin.style.display = "block";
                                oretrieve.style.display = "none";
                         },1000)
                        }else{
                            alert("修改失败");
                        }
                    }
                });
               
                for(let i = 0;i<oret_ph_input.length;i++){
                    oret_ph_input[i].value = null;
                }
            }else{
                alert("请确认所填项是否格式正确");
            }
            }
            let flag_ret_pwd = false;
            oret_ph_input[4].onblur = function(){
                if(oret_ph_input[4].value!=oret_ph_input[3].value){
                    oret_ph_pwd.innerHTML = "两次密码不一致";
                    flag_ret_pwd = false;
                }else{
                    oret_ph_pwd.innerHTML = "";
                    flag_ret_pwd = true;
                }
            }
            window.addEventListener("scroll",function(){
                let Top = document.body.scrollTop || document.documentElement.scrollTop;
                omask.style.marginTop = Top + "px";
                omask.style.left = 0;
            })  
            
         
