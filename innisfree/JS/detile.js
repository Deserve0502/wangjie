"use strict";$(".detile_header").find("div").not(".HOME").click(function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0;for(var d=0;d<$(".detile_header").find("div").length;d++)$(".detile_header").find("div").eq(d).find("span").eq(0).css({transform:"rotate(90deg)"});$(".detile_header").find("ul").hide(),$(".detile_header").find("div").eq($(this).index()).find("span").eq(0).css({transform:"rotate(-90deg)"}),$(".detile_header").find("ul").eq($(this).index()-1).show()}),$(document).click(function(){$(".detile_header").find("ul").hide();for(var e=0;e<$(".detile_header").find("div").length;e++)$(".detile_header").find("div").eq(e).find("span").eq(0).css({transform:"rotate(90deg)"})}),MagniFier();