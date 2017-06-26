function validateForm(d){
	var input = d.getAttribute('id');
	//console.log(input.toLowerCase());
	switch(input.toLowerCase()){
		case "email":
			var emailStr = d.value;
			var emailRegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/﻿;
			if(emailRegExp.test(emailStr)){
				d.style.backgroundColor = " #c7f7ae";
				document.getElementById('email_id').innerHTML = "";
			}
			else{
				d.style.backgroundColor = " #f7bbae";
							
				document.getElementById('email_id').innerHTML = "Enter a valid input";
			}
				break;
			case "contact":
				var phone_no = d.value;
				var length = phone_no.length;
				var phoneRegExp = /\D+/g;
				if(length<10 || phoneRegExp.test(phone_no)){
					d.style.backgroundColor = " #f7bbae";
					document.getElementById('contact_no').innerHTML = "Enter a valid 10-digit contact no.";
				}
				else{
					d.style.backgroundColor = "#c7f7ae";
					document.getElementById('contact_no').innerHTML = "";
				}
					break;
			case "c_pass":
				var pass1 = document.getElementById("pass").value;
				var pass2 = d.value;
				if(pass1 == pass2){
					d.style.backgroundColor = "#c7f7ae";
					document.getElementById('password').innerHTML = "Password confirmed";
				}
				else{
					d.style.backgroundColor = " #f7bbae";
					document.getElementById('password').innerHTML = "Password string not equal";
				}
				break;
			case "f_name":
					var name=  d.value;
					var nameRegExp = /^[a-zA-Z ]*$/g;
					
					if(nameRegExp.test(name)  ){
						
						d.style.backgroundColor = " #c7f7ae";
						document.getElementById('firstname').innerHTML = "";
					}
						
					else{
							d.style.backgroundColor = " #f7bbae";
							
						document.getElementById('firstname').innerHTML = "Enter a valid input";
						
							
					}
					break;
			case "l_name":
				var name=  d.value;
				var nameRegExp = /^[a-zA-Z ]*$/g;
				
				if(nameRegExp.test(name)){
					d.style.backgroundColor = " #c7f7ae";
					document.getElementById('lastname').innerHTML = "";
					
				}
						
				else{
							
					d.style.backgroundColor = " #f7bbae";
					document.getElementById('lastname').innerHTML = "Enter a valid input";
							
				}
				break;	
					
					
		}				
				
	}
			
function submitForm(){
	var x = document.querySelectorAll('input');
	var i,j;
	for(i=0;i<x.length;i++){					
	if(x[i].value== ""){
		x[i].style.backgroundColor = "#f7bbae";
		
		alert("All fields are mandatory");
		return false;
		}
	}
	document.getElementById("form").submit();
}