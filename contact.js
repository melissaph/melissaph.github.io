var button = document.querySelector("#btn")
var response = document.querySelector("#response")


button.onclick = function(){
	var email = document.querySelector("#email").value
	var paragraph = document.querySelector("#paragraph").value

	function validateEmail(email){
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
	}

	if(validateEmail(email)){
	console.log("info");
	response.innerHTML = "Thank you! We will contact you in 2-4 business days.";	
}else{
	console.log("empty");
	response.innerHTML = "Please provide a valid e-mail address."
}
}