$("#cat1").on("click", function(){
	$("#landscapes").css("display", "inline-block")
	$("#portaits").css("display", "none")
	$("#religion").css("display", "none")
	$("#abstracts").css("display", "none")
	$("#cat1").css("color", "white")
	$("#cat1").css("backgroundColor", "#C43718")
	$("#cat2, #cat3, #cat4").css("color", "black")
	$("#cat2, #cat3, #cat4").css("backgroundColor", "white")

})

$("#cat2").on("click", function(){
	$("#portraits").css("display", "inline-block")
	$("#landscapes").css("display", "none")
	$("#religion").css("display", "none")
	$("#abstracts").css("display", "none")
	$("#cat2").css("color", "white")
	$("#cat2").css("backgroundColor", "#C43718")
	$("#cat1, #cat3, #cat4").css("color", "black")
	$("#cat1, #cat3, #cat4").css("backgroundColor", "white")
})

$("#cat3").on("click", function(){
	$("#religion").css("display", "inline-block")
	$("#portraits").css("display", "none")
	$("#landscapes").css("display", "none")
	$("#abstracts").css("display", "none")
	$("#cat3").css("color", "white")
	$("#cat3").css("backgroundColor", "#C43718")
	$("#cat1, #cat2, #cat4").css("color", "black")
	$("#cat1, #cat2, #cat4").css("backgroundColor", "white")
})

$("#cat4").on("click", function(){
	$("#abstracts").css("display", "inline-block")
	$("#portraits").css("display", "none")
	$("#religion").css("display", "none")
	$("#landscapes").css("display", "none")
	$("#cat4").css("color", "white")
	$("#cat4").css("backgroundColor", "#C43718")
	$("#cat1, #cat3, #cat2").css("color", "black")
	$("#cat1, #cat3, #cat2").css("backgroundColor", "white")
})

this.onclick = function(e){
	if(e.target.getAttribute("src")){
		$("#box").fadeToggle()
		var address = e.target.getAttribute("src")
		$("#pic2").attr("src", address)
}}
