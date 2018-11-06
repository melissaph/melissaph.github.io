$("#front1").mouseover(function(){
	$("#front1").css("display", "none")
	$("#back1").css("display", "inline-block")
})

$("#back1").mouseleave(function(){
	$("#back1").css("display", "none")
	$("#front1").css("display", "inline-block")
})

$("#front2").mouseover(function(){
	$("#front2").css("display", "none")
	$("#back2").css("display", "inline-block")
})

$("#back2").mouseleave(function(){
	$("#back2").css("display", "none")
	$("#front2").css("display", "inline-block")
})

$("#front3").mouseover(function(){
	$("#front3").css("display", "none")
	$("#back3").css("display", "inline-block")
})

$("#back3").mouseleave(function(){
	$("#back3").css("display", "none")
	$("#front3").css("display", "inline-block")
})


var flag1 = true
var flag2 = true
var flag3  = true

$("#sum1").click(function(){
	$("#synopsis1").slideToggle(500)

	if(flag1 == true){
	$("#span1").html("")
	$("#book2").css("top", "60%")
		flag1 = false
	}else{
		$("#span1").html("⌄")
		$("#span1").css("fontSize", "24px")
		flag1 = true
		$("#book2").css("top", "30%")
	}
})

$("#sum2").click(function(){
	$("#synopsis2").slideToggle(500)

	if(flag2 == true){
	$("#span2").html("")
	$("#book3").css("marginTop", "7%")
		flag2 = false
	}else{
		$("#span2").html("⌄")
		$("#span2").css("fontSize", "24px")
		flag2 = true
		$("#book3").css("marginTop", "0")
	}
})

$("#sum3").click(function(){
	$("#synopsis3").slideToggle(500)

	if(flag3 == true){
	$("#span3").html("")
		flag3 = false
	}else{
		$("#span3").html("⌄")
		$("#span3").css("fontSize", "24px")
		flag3 = true
	}
})


// $("#sum1").on("click", function(){
// 	("#synopsis1").slideToggle()
// 	("span").html("^")
// })

