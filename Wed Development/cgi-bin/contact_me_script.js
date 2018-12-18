/* JavaScript File */
/* Title  Final Project Contact Me Form Script
  @author: Gabriel Weigand
  creation date: 11/26/18
  modified date: 12/17/18
	*/

var name, email, question;		/* declare variables for holding form data */

function setDate(){
	var today = new Date();		/* declare new Date class object */
	document.getElementById("date").value = (today.getMonth() + 1) + "/" + today.getDate() + "/" + today.getFullYear();
}		/* function gets date elements from HTML, then sets those elements to current date with Date object */

function checkDate(){
	if(document.getElementById("date").value == "MM/DD/YYYY") {
		setDate();
	}		/* function checks date input field value and runs setDate() again if date was reset */
}

function submitForm(){
	if(validateForm()){
		return true;
	}else{
		alert("Sorry form was not completed correctly.\nRequirements:\nName: at least 4 characters\nEmail format: 'example@example.com'");
		return false;
	}		/* function returns true if validateForm returns true otherwise page alerts user and returns false */
}

function validateForm(){		/* function declares variables and sets values for each field then returns true if requirements are met */
	name = document.getElementById("name").value;
	email = document.getElementById("email").value;
	question = document.getElementById("question").value;
		/* variables are set to form values */
	
	if(name.length > 3){
		alert("Name is: " + name + "\nEmail is: " + email + "\nQuestion is: " + question + "\nDate: " + date.value);
		return true;
	}else{
		return false;
	}		/* if name is more that 3 characters the function alerts user with form data and returns true */
}

