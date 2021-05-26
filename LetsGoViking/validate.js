function validate(){
    let firstName = document.forms["messageForm"]["firstName"].value; 
    let lastName = document.forms["messageForm"]["lastName"].value; 
    let email = document.forms["messageForm"]["email"].value; 
    let message = document.forms["messageForm"]["message"].value; 

    if(!validateEmail(email)){
        document.getElementById("email").innerHTML.value = "Vafan";
    }
}


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(re.test(String(email).toLowerCase()));
    return re.test(String(email).toLowerCase());
}