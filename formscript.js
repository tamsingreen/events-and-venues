function validateForm() {
     var userName=document.forms["eventform"]["name"].value;
     var userEmail=document.forms["eventform"]["email"].value;
     var userEvent=document.forms["eventform"]["details"].value;
     if (userName==null || userName=="" || userEmail==null || userEmail=="" || userEvent==null || userEvent=="") {
         alert("All fields must be filled in");
         return false;
     }
    var atpos=userEmail.indexOf("@");
	var dotpos=userEmail.lastIndexOf(".");
	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
		alert("Not a valid e-mail address");
  		return false;
  	}
}
