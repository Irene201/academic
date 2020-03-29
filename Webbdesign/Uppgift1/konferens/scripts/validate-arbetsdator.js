window.onload = function() {
	var form = document.getElementsByTagName("form")[0];
	form.onsubmit = validate;
}

/* Validerar formulärets inmatningsfält. Kontrollerar att någon
*  text har angivits. Om något fält inte har fyllts i returnerar funktionen falskt vilket resulterar i att
*  formuläret inte skickas. Slutligen uppmanas användaren att ange om de vill skicka iväg sin registrering eller inte
*  Endast om alla fält är ifyllda och användaren har svarat ja kommer funktionen att returnera sant vilket leder till att
*  formuläret skickas iväg.
*/
function validate() {
	var firstname = document.getElementById("field_firstname").value;
	if(firstname.length == 0) {
		alert("Du måste ange ett förnamn");
		document.getElementById("field_firstname");
		return false;
	}
	
	var lastname = document.getElementById("field_lastname").value;
	if(lastname.length == 0) {
		alert("Du måste ange ett efternamn");
		return false;
	}
	
	var organisation = document.getElementById("field_organisation").value;
	if(organisation.length == 0) {
		alert("Du måste ange en organisation");
		return false;
	}
	
	var email = document.getElementById("field_email").value;
	if(email.length == 0) {
		alert("Du måste ange en epostadress");	
		return false;
	}
	var pattern = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/; 
    var isValid = pattern.test(email);
    if(isValid == false) {
		alert("Du måste ange en giltig epostadress");
		return false;
    }		
	
	var checkRadio = document.getElementById("pres_type_1").checked;
	var checkRadio2 = document.getElementById("pres_type_2").checked;
	if(checkRadio == true || checkRadio2 == true) {
		var titel = document.getElementById("field_pres_title").value;
		if(titel.length == 0) {
			alert("Du måste ange en titel");
			return false;
		}
	}
	
	var meddelande = document.getElementById("field_message").value;
	if(meddelande.length > 201) {
		alert("Max 200 tecken i meddelanderutan");
		return false;
	}
	
	if(confirm("Vill du skicka registreringen?")) {
		return true;
	} else {
		alert("Registreringen avbröts.");
		return false;
	}
}