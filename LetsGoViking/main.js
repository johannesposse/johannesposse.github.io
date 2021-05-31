let menuIco = document.querySelector("#menuIco");
let mobileMenu = document.querySelector(".mobileMenu");
mobileMenu.style.display = "none";

menuIco.addEventListener("click", function(){
    

    if(mobileMenu.style.display === "none"){
        mobileMenu.style.display = "flex"
        mobileMenu.style.webkitAnimationName = "slide-right";
        mobileMenu.style.webkitAnimationDuration =".5s";

    }else{
        mobileMenu.style.webkitAnimationName = "slide-left";
        mobileMenu.style.webkitAnimationDuration =".5s";
        mobileMenu.style.display = "none"
    }
})

