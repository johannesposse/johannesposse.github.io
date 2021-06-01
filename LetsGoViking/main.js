let menuIco = document.querySelector("#menuIco");
let mobileMenu = document.querySelector(".mobileMenu");
mobileMenu.style.display = "none";

menuIco.addEventListener("click", function(){
    

    if(mobileMenu.style.display === "none"){
        mobileMenu.style.display = "flex"
        mobileMenu.style.webkitAnimationName = "slide-right";
        mobileMenu.style.webkitAnimationDuration =".5s";

    }
    else{
        // mobileMenu.style.webkitAnimationName = "slide-left";
        // mobileMenu.style.webkitAnimationDuration =".5s";
        mobileMenu.style.display = "none"
    }
})




function sendEmail(){

    let email = document.querySelector("#email");
    let firstName = document.querySelector("#firstName");
    let lastName = document.querySelector("#lastName");
    let messages = document.querySelector("#message");

    if(email.value == "" || firstName.value == "" || lastName.value == "" || messages.value == ""){
        document.querySelector("#pConfirm").innerText = "Vänligen fyll i all info"
        document.querySelector(".confirm").style.display ="block",
        document.querySelector(".confirm").style.webkitAnimationName = "slide-right",
        document.querySelector(".confirm").style.webkitAnimationDuration =".5s"
        document.querySelector(".confirm").style.backgroundColor ="red"
    }else{
        Email.send({
            SecureToken : "9f204852-7f1d-48f9-926e-ae61e3b475fa",
            To : 'info@letsgoviking.com',
            From : "info@letsgoviking.com",
            Subject : "Nytt meddelande från Let's Go Viking",
            Body : "Förnamn: " + firstName.value + "<br>" + "Efternamn: " + lastName.value + "<br>" + "Epost: " + email.value + "<br>" +"Meddelande:"+ messages.value
        }).then(
        message => document.querySelector("#pConfirm").innerText = message,
        confirm()
        );
    }



}

function confirm()
{
    if(message => document.querySelector("#pConfirm").innerText == "OK"){
        document.querySelector(".confirm").style.backgroundColor ="greenyellow"
    }else{
        document.querySelector(".confirm").style.backgroundColor ="red"
    }

    document.querySelector(".kontakt").style.display ="none",
    document.querySelector("#pConfirm").innerText = "Tack, ditt mejl är skickat"
    document.querySelector(".confirm").style.display ="block",
    document.querySelector(".confirm").style.webkitAnimationName = "slide-right",
    document.querySelector(".confirm").style.webkitAnimationDuration =".5s"
   
}
