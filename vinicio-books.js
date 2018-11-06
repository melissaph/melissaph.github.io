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


var flag = true

$("#sum1").click(function(){
	$("#synopsis1").slideToggle(500)

	if(flag == true){
	$("span").html("⌃")
	$("span").css("fontSize", "14px")
	$("#book2").css("top", "60%")
		flag = false
	}else{
		$("span").html("⌄")
		$("span").css("fontSize", "24px")
		flag = true
		$("#book2").css("top", "30%")
	}
})

$("#sum2").click(function(){
	$("#synopsis2").slideToggle(500)

	if(flag == true){
	$("span").html("⌃")
	$("span").css("fontSize", "14px")
	$("#book3").css("top", "60%")
		flag = false
	}else{
		$("span").html("⌄")
		$("span").css("fontSize", "24px")
		flag = true
		$("#book3").css("top", "30%")
	}
})

$("#sum3").click(function(){
	$("#synopsis3").slideToggle(500)

	if(flag == true){
	$("span").html("⌃")
	$("span").css("fontSize", "14px")
		flag = false
	}else{
		$("span").html("⌄")
		$("span").css("fontSize", "24px")
		flag = true
	}
})


$("#sum1").on("click", function(){
	("#synopsis1").slideToggle()
	("span").html("^")
})

