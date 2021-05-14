let search ="";
let page = 1;
const protcol = "https://";
const urlName = 'www.flickr.com/';
const path = "services/";
const query = "rest/?method=flickr.photos.search&";
const apiKey = "api_key=8ed52e76b5c4ab1bec78c9e13fbd3f60";
const query2 = "&sort=relevance&";
const query3 = "&format=json&nojsoncallback=1";

document.querySelector(".forms").style.display = "none";

const btn = document.querySelector("#btnSearch");
const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#previous");

document.addEventListener('keypress', async function (e){
    if (e.key === 'Enter') {
        API();
      }
});

btn.addEventListener("click", async function(){
    API();
});

nextBtn.addEventListener("click", async function(){
    page++
    API();
});

prevBtn.addEventListener("click", async function(){
    if(page == 1){
        document.querySelector(".errorMessage").style.display = "flex";
        document.querySelector(".errorMessage").style.webkitAnimationName = "slide-down";
        document.querySelector(".errorMessage").style.webkitAnimationDuration =".5s";
        document.querySelector("#errorP").innerText = "Can't go back.. Aldready on first page";
    }else{
        page--;
        API();
    }
});

document.querySelector("#closeImg").addEventListener("click", function(){
    document.querySelector(".errorMessage").style.display = "none";
});


async function API(){
    let search = document.querySelector("#search").value;
    let perPage = "per_page=" + document.querySelector("#perPage").value;
    
    if(search == "")
    {
        document.querySelector(".errorMessage").style.display = "flex";
        document.querySelector(".errorMessage").style.webkitAnimationName = "slide-down";
        document.querySelector(".errorMessage").style.webkitAnimationDuration =".5s";
        document.querySelector("#errorP").innerText = "please enter something in the searchbox";
    }
    else
    {
        let searchPath ="&text=" + search;
        let url = `${protcol}${urlName}${path}${query}${apiKey}${searchPath}${query2}${perPage}${query3}&page=${page}`;
        const response = await fetch(url);
        const data = await response.json();
        document.querySelector("#pages").innerHTML = data.photos.page + " / " + data.photos.pages;
        generateIMG(data.photos.photo);
        document.querySelector(".changePage").style.display = "flex";
    }
}

function generateIMG(data){
    
    removePhotos("newImg");
    removePhotos("topImg");

    const large = "_b.jpg";
    const small = "_m.jpg";

    for(let i = 0; i < data.length; i++){
        const farmID = data[i].farm;
        const serverID = data[i].server;
        const id = data[i].id;
        const secret = data[i].secret;
        const imgUrl = `https://live.staticflickr.com/${serverID}/${id}_${secret}`;
        const addImg = document.querySelector(".images");

        if(i == 0){
            const topImg = document.createElement("section");
            topImg.className = "topImg";
            topImg.style.backgroundImage = "url(" + imgUrl + large + ")";
            addImg.append(topImg);
        }else{
            const newImg = document.createElement("section");
            newImg.className = "newImg";
            newImg.style.backgroundImage = "url(" + imgUrl + small + ")";
            addImg.append(newImg);
        }
    }
    
    const changeImg = document.querySelectorAll(".newImg").forEach(x => {
            x.addEventListener("click", function(){
            let top = document.querySelector(".topImg").style.backgroundImage;
            let bot = x.style.backgroundImage;
            top = top.slice(0,-8);
            top = top + small;
            bot = bot.slice(0,-8);
            bot = bot + large;
            x.style.backgroundImage = top;
            document.querySelector(".topImg").style.backgroundImage = bot;
        });
    });
}

function removePhotos(className){
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}



let filterBtn = document.querySelector("#btnFilter")
filterBtn.addEventListener("click", function(){
    const forms = document.querySelector(".forms");
    if(forms.style.display == "none"){
        forms.style.webkitAnimationName = "slide-down";
        forms.style.webkitAnimationDuration =".5s";
        document.querySelector(".forms").style.display = "flex";
    }else{
        forms.style.display = "none";
    }
});

let range = document.querySelector("#perPage")
range.addEventListener("input", function(){
    document.querySelector("#rangeValue").innerText = range.value;
})

document.querySelector("#rangeValue").innerText = range.value;
