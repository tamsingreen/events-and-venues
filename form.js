var namechecked = false;
var emailchecked = false;
var detailschecked = false;

$(document).ready(function() {
	$('input[name=name]').focusout(function() {
		var name = $('input[name=name]').val();
		namechecked = isNotEmpty(name, "nameerror");
	}) //end of name error handler

	$('input[name=email]').focusout(function() {
		var email = $('input[name=email]').val();
		emailchecked = isNotEmpty(email,"emailerror");
		if (emailchecked) {
			emailchecked = isValidEmail(email);
		}
	}) //end of email error handler

	$('textarea[name=details]').focusout(function() {
		var details = $('textarea[name=details]').val();
		detailschecked = isNotEmpty(details,"detailserror");
	}) //end of details error handler
}); // end document ready

//return true if field is not empty or null
function isNotEmpty(field, errorID) { 
	if (field==null || field=="") {
         document.getElementById(errorID).innerHTML="* Must be filled in";
         return false;
	} else {
		document.getElementById(errorID).innerHTML="";
		return true;
	}
} // end isNotEmpty

//return true if email is valid
function isValidEmail(email) {
	var atpos = email.indexOf("@");
	var dotpos = email.lastIndexOf(".");
	if (atpos < 1 || dotpos < atpos+2 || dotpos+2 >= email.length) {
		document.getElementById('emailerror').innerHTML="* Not a valid email address";
        return false;
    } else {
		document.getElementById('emailerror').innerHTML="";
		return true;
	}
} //end isValidEmail

function readyToSubmit() {
	return (namechecked && emailchecked && detailschecked);
} //end readyToSubmit