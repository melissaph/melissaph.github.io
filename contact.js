var button = document.querySelector("#btn")
var response = document.querySelector("#response")


button.onclick = function(){
	var email = document.querySelector("#email").value
	var paragraph = document.querySelector("#paragraph").value
	var form = document.querySelector("#form")

	function validateEmail(email){
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
	}

	if(validateEmail(email)){
	console.log("info");
	response.innerHTML = "Gracias! Te responderemos en 2-4 dias.";
	form.style.display = "none"

}else{
	console.log("empty");
	response.innerHTML = "Por favor de una direccion de correo electronico valida."
}
}