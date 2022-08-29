/*First name validation */
function validateFirstName(){
    var fName=document.getElementById("firstName").value;
    /*Regex test */
    var re1= /^[a-zA-Z\s\'\-]{2,15}$/;
    /*if condition used to perform regex test */
    if(re1.test(fName)){
        document.getElementById("firstNamePrompt").style.color="green";
        document.getElementById("firstNamePrompt").innerHTML="<strong>valid</strong>";
        return (true);
    }
    else{
        document.getElementById("firstNamePrompt").style.color="red";
        document.getElementById("firstNamePrompt").innerHTML="<strong>Enter 2-15 characters</strong>";
        return (false);
    }
}
/*Middle name validation */
function validateMiddleName(){
    var mName=document.getElementById("middleName").value;
    var re2= /^[a-zA-Z\s\'\-]{2,15}$/;

    if(re2.test(mName)){
        document.getElementById("middlePrompt").style.color="green";
        document.getElementById("middlePrompt").innerHTML="<strong>valid</strong>";
        return (true);
    }
    else{
        document.getElementById("middlePrompt").style.color="red";
        document.getElementById("middlePrompt").innerHTML="<strong>Enter 2-15 characters</strong>";
        return (false);
    }
}
/*Last name validation */
function validateLastName(){
    var lName=document.getElementById("lastName").value;
    var re3= /^[a-zA-Z\s\'\-]{2,25}$/;

    if(re3.test(lName)){
        document.getElementById("lastNamePrompt").style.color="green";
        document.getElementById("lastNamePrompt").innerHTML="<strong>valid</strong>";
        return (true);
    }
    else{
        document.getElementById("lastNamePrompt").style.color="red";
        document.getElementById("lastNamePrompt").innerHTML="<strong>Enter 2-15 characters</strong>";
        return (false);
    }
}
/*Phone number validation */
function validatePhone(){
    var phoneNumber=document.getElementById("phone").value;
    var re4=/^\d{5}-\d{5}$/;

    if(re4.test(phoneNumber)){
        document.getElementById("phonePrompt").style.color="green";
        document.getElementById("phonePrompt").innerHTML="<strong>valid</strong>";
        return (true);
    }
    else{
        document.getElementById("phonePrompt").style.color="red";
        document.getElementById("phonePrompt").innerHTML="<strong>Use xxxxx-xxxxx</strong>";
        return (false);
    }
}
/*E-mail validation */
function validateEmail(){
    var eMail=document.getElementById("email").value;
    var re5=/^[a-zA-Z\s\'\-\d]{2,25}$/;

    if(re5.test(eMail)){
        document.getElementById("emailPrompt").style.color="green";
        document.getElementById("emailPrompt").innerHTML="<strong>valid</strong>";
        return (true);
    }
    else{
        document.getElementById("emailPrompt").style.color="red";
        document.getElementById("emailPrompt").innerHTML="<strong>abc@xyz.com</strong>";
        return (false);
    }
}
/*Password validation */
function validatePassword(){
    var passwd=document.getElementById("password").value;
    var re6=/^[a-zA-Z\s\'\-\d]{6,50}$/;

    if(re6.test(passwd)){
        document.getElementById("passwordPrompt").style.color="green";
        document.getElementById("passwordPrompt").innerHTML="<strong>valid</strong>";
        return (true);
    }
    else{
        document.getElementById("passwordPrompt").style.color="red";
        document.getElementById("passwordPrompt").innerHTML="<strong>Password has to be longer than 6 characters</strong>";
        return (false);
    }
}
/*Submission Alert */
function submitForm(){
    alert("Your form has been submitted.");
}