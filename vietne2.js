window.onload=function(){
	document.getElementById('register').addEventListener("click", function(){Register()} );
	function Register(){
		var form = document.getElementById("MyForm");
		var age = document.getElementById("age").value;
		var email = document.getElementById("email").value;
		var password1 = document.getElementById("password1").value;
		var password2 = document.getElementById("password2").value;
		if (email == "" || password1 == "" || password2 == "" || age == ""){
			alert("Some of the fields are not filled");
		} else {
			if (!IsNumber(age)) alert("Age field must contain only numbers!")
			else if(Number(age)<16 || Number(age)>100) {
				alert("Age must be in range between 16 and 100!");
			} else {
				if (password1.length<8) alert("Password must contain more than 8 symbols")
				else if (password1!==password2) alert("Passwords are not equal");
				else {
					form.action = "http://naivist.net/form";
					form.submit();
				}
			}
		}
	}
	function IsNumber(age){
		for (var i=0; i<age.length; i++){
			if (age[i]<"0" || age[i]>"9") return false;
		}
		return true;
	}
}