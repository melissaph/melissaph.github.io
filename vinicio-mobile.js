var flag = true

$(".mobileNav").click(function(){
	$(".hamburger").slideToggle(500)

	if(flag == true){
	$(".mobileNav").html("-")
	$(".images").css("top", "45%")
	$("#slideshow").css("top", "45%")
	$("#sidenav").css("top", "45%")
	$("#form").css("top", "45%")
	$("#bottom").css("marginTop", "60%")
		flag = false
	}else{
		$(".mobileNav").html("+")
		flag = true
		$(".images").css("top", "25%")
		$("#sidenav").css("top", "25%")
		$("#form").css("top", "25%")
		$("#bottom").css("marginTop", "25%")
	}
})
