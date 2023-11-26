// settings-container
document.querySelector(".toggle-switch .fa-gear").onclick = function(){
    this.classList.toggle("fa-spin");
    document.querySelector(".settings-box").classList.toggle("opened");
};
const colorsLi = document.querySelectorAll(".colors-list li");
colorsLi.forEach(li => {
    li.addEventListener('click', (e) => {
        document.documentElement.style.setProperty("--main-color", e.target.dataset.color);
        localStorage.setItem("color-option", e.target.dataset.color);
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");
            e.target.classList.add("active");
        })
    });
});
let mainColors = localStorage.getItem("color-option");
if(mainColors !== null){
    document.documentElement.style.setProperty("--main-color", mainColors);

    document.querySelectorAll(".colors-list li").forEach(element => {
        element.classList.remove("active");
         if(element.dataset.color === mainColors){
            element.classList.add("active");
         }
    });
};
const randomOption = document.querySelectorAll(".random-background span");
function handleActive(ele){
    ele.forEach(el => {
        el.addEventListener('click', (e) => {
            e.target.parentElement.querySelectorAll(".active").forEach(element => {
                element.classList.remove("active");
                e.target.classList.add("active")
            });
        });
    });
};
handleActive(randomOption);
// select Landing Page Element
let landingPage = document.querySelector(".landing-page");

// get array of imgs
let imgsArray = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg', 'img6.jpg'];
setInterval(() =>{

        // get random number
        let randomNumber = Math.floor(Math.random() * imgsArray.length);
        
        // change background image url
        landingPage.style.backgroundImage = 'url("images/' + imgsArray[randomNumber] + '")';
}, 10000);

let ourSkills = document.querySelector(".skills"); 

window.onscroll = function(){

    let skillsOffsetTop = ourSkills.offsetTop;
    let skillsOuterHeight = ourSkills.offsetHeight;
    let windowHeight = this.innerHeight;
    let windowScrollTop = this.pageYOffset;


    if(windowScrollTop >= (skillsOffsetTop + skillsOuterHeight - windowHeight)) {
        let allSkills = document.querySelectorAll(".skill-box .progress span");
        allSkills.forEach(skill => {
            skill.style.width = skill.dataset.progress;
        });
    }
};
let ourGallery = document.querySelectorAll(".gallery .image-box img");
ourGallery.forEach(img => {
    img.addEventListener('click', function(){
        let overlay = document.createElement("div");
        overlay.className = "popup-overlay";
        document.body.appendChild(overlay);
        let popupBox = document.createElement("div");
        popupBox.className = "popup-box";
        document.body.appendChild(popupBox);
        if(img.alt !== null){
            let heading = document.createElement("h3");
            heading.className = "heading";
            let headingText = document.createTextNode(img.alt);
            heading.appendChild(headingText);
            popupBox.appendChild(heading);
        }
        let popupImg = document.createElement("img");
        popupImg.className = 'pop-img';
        popupImg.src = img.src;
        popupBox.appendChild(popupImg);
        
        let closeButton = document.createElement("span");
        let closeButtonText = document.createTextNode("x");
        closeButton.className = "close";
        closeButton.appendChild(closeButtonText);
        popupBox.appendChild(closeButton);

        document.addEventListener("click", (e) => {
            if(e.target.classList == "close"){
                e.target.parentNode.remove();

                document.querySelector(".popup-overlay").remove();
            }
        });
       
    });
});
const allBullets = document.querySelectorAll(".nav-bullets .bullet");
function scrollToSomeWhere(element){
    element.forEach(ele =>{
        ele.addEventListener("click", (e) => {
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
};
scrollToSomeWhere(allBullets);
const navBullets = document.querySelector(".nav-bullets");
const spanBullet = document.querySelectorAll(".bullet-options span");
spanBullet.forEach(span => {
    span.addEventListener("click", (e) => {
        if(span.dataset.display === "yes"){
            navBullets.style.display = "block";
            localStorage.setItem("bullet-option", 'block');
        }else{
            navBullets.style.display = "none";
            localStorage.setItem("bullet-option", 'none');
        }
    });
});
handleActive(spanBullet);
let bulletLocalItem = localStorage.getItem("bullet-option");
if(bulletLocalItem !== null){
    spanBullet.forEach(span => {
        span.classList.remove('active');
        if(bulletLocalItem === "block"){
            navBullets.style.display = "block";
            document.querySelector(".option-box .bullet-options span.right").classList.add("active");
        }else{
            navBullets.style.display = "none";
            document.querySelector(".option-box .bullet-options span.left").classList.add("active");
        }
    });
}
document.querySelector(".reset").onclick = function(){
    localStorage.clear();
    window.location.reload();
}
let toggleBtn = document.querySelector(".toggle-menue");

let tlinks = document.querySelector(".links-container");

toggleBtn.onclick = function(){
    this.classList.toggle("menue-active");

    tlinks.classList.toggle("open");
}
document.addEventListener('click', (e) => {
    if(e.target !== toggleBtn && e.target !== tlinks){
        if(tlinks.classList.contains("open")){
            toggleBtn.classList.toggle("menue-active");
            tlinks.classList.toggle("open");
        }
    }
});

tlinks.onclick = function(e){
    e.stopPropagation();
}

