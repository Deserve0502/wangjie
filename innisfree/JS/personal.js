
$(".person_username").html(localStorage.getItem("username"));
$(".person_userid").html(localStorage.getItem("userid"));
$(".person_exit").click(function(){
    localStorage.clear();
    location.reload();
})