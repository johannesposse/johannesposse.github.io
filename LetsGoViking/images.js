
let img;

showIMG();
closeIMG();

function closeIMG(){
     const closeIMG = document.querySelectorAll("#cImg").forEach(x => {
         x.addEventListener("click", function(){
             let modulee = document.querySelector(".module")
             modulee.style.display = "none"    
         })
     })
}

function showIMG(){    
    const showImg = document.querySelectorAll("#uImg").forEach(x => {
            x.addEventListener("click", function(){
                let modulee = document.querySelector(".module")
                modulee.style.display = "flex"
                modulee.style.backgroundImage = "url(" +  x.src + ")"
                img = x.src
        });
    });
    
}

function nextIMG(){
            let modulee = document.querySelector(".module")
            let nextImg = img.charAt(img.length - 5)
            let num = parseInt(nextImg, 10) + 1;
            let newImg = img.slice(0, -5) + num + ".jpg";
            
            checkIfImageExists(newImg, (exists) => {
            if (exists) {
                modulee.style.backgroundImage = "url(" +  newImg + ")"
                img = newImg
            } else {
                // Fail code
            }
            });           
    
}

function prevIMG(){
    let modulee = document.querySelector(".module")
    let nextImg = img.charAt(img.length - 5)
    let num = parseInt(nextImg, 10) + -1;
    let newImg = img.slice(0, -5) + num + ".jpg";
    
    checkIfImageExists(newImg, (exists) => {
    if (exists) {
        modulee.style.backgroundImage = "url(" +  newImg + ")"
        img = newImg
    } else {
        // Fail code
    }
    });           

}

function checkIfImageExists(url, callback) {
    const img = new Image();

    img.src = url;

    if (img.complete) {
      callback(true);
    } else {
      img.onload = () => {
        callback(true);
      };
      img.onerror = () => {
        callback(false);
      };
    }
  }