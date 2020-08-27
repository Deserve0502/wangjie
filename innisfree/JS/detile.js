$(".detile_header").find("div").not(".HOME").click(function(e){
    e.stopPropagation ? e.stopPropagation():e.cancelBubble = true;
    for(let i = 0;i<$(".detile_header").find("div").length;i++){
        $(".detile_header").find("div").eq(i).find("span").eq(0).css({"transform":"rotate(90deg)"});
    }
    $(".detile_header").find("ul").hide();
    $(".detile_header").find("div").eq($(this).index()).find("span").eq(0).css({"transform":"rotate(-90deg)"});
   $(".detile_header").find("ul").eq($(this).index()-1).show();
})
$(document).click(function(){
    $(".detile_header").find("ul").hide();
    for(let i = 0;i<$(".detile_header").find("div").length;i++){
        $(".detile_header").find("div").eq(i).find("span").eq(0).css({"transform":"rotate(90deg)"});
    }
})
MagniFier();