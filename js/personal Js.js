// global////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let wholePageContainer = document.querySelector(".wholePageContainer");
let aboutUsSignImageDiv = document.querySelector(".signImageDiv");
let signImage = document.querySelector(".signImage");
let bookstoreTab = document.querySelector(".bookstore-link");
let weatherLink = document.querySelector(".weather-link");
let aboutUsTab = document.getElementById("aboutUsTab");
let listItemDivs = document.querySelectorAll(".list-item-div");
let firstTwoBiosContainer = document.querySelector(".first-two-bios-container");
let secondtTwoBiosContainer = document.querySelector(".second-two-bios-container");
let biosInnerContainer = document.querySelector(".bios-inner-container");
let aboutUsDescriptionInnerContainerMedia = document.querySelector(".about-us-description-inner-container-media");

// end of global/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// about us media query////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let AboutUsWindowDiv = document.querySelector(".about-us-window-div");
let aboutUsWindowInnerContainer = document.querySelector(".about-us-window-inner-container");
let rightArrow =document.querySelector(".right-arrow");
let leftArrow = document.querySelector(".left-arrow");

aboutUsWindowInnerContainer.addEventListener("click", (event) => {
    event.stopPropagation();
})

rightArrow.addEventListener('click', () => {
    rightArrow.style.display = "none";
    leftArrow.style.removeProperty("display");
    firstTwoBiosContainer.style.transform = "translateX(106%)";
    secondtTwoBiosContainer.style.transform = "translateX(106%)";
    aboutUsDescriptionInnerContainerMedia.style.transform = "translateX(0%)";
});

leftArrow.addEventListener('click', () => {
    leftArrow.style.display = "none";
    rightArrow.style.removeProperty("display");
    firstTwoBiosContainer.style.transform = "translateX(0%)";
    secondtTwoBiosContainer.style.transform = "translateX(0%)";
    aboutUsDescriptionInnerContainerMedia.style.transform = "translateX(-100%)";
})


// end of about us media query//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

window.addEventListener("load", () => {
    if(window.innerWidth <= 830){
        AboutUsWindowDiv.style.display = "none";
        AboutUsWindowDiv.style.top = "761px";
    }else{
        leftArrow.style.display = "none";
    }
})

bookstoreTab.addEventListener('click',(event) => {
event.stopPropagation();
})

weatherLink.addEventListener('click',(event) => {
    event.stopPropagation();
})

aboutUsTab.addEventListener("click", (event)=>{
    console.log(window.innerWidth);
     if(window.innerWidth <= 830){
        AboutUsWindowDiv.style.removeProperty("display");
        AboutUsWindowDiv.style.top = "761px";
        setTimeout(() => {
            AboutUsWindowDiv.style.top = "60px";
            wholePageContainer.style.filter = "brightness(0.5)";
            AboutUsWindowDiv.style.opacity = "1";
            event.stopPropagation();  
        }, 100);
        event.stopPropagation();
    }else{
        wholePageContainer.style.filter = "brightness(0.5)";
        aboutUsSignImageDiv.style.transform = "translateY(-132px)";
        aboutUsSignImageDiv.style.opacity = "1";
        event.stopPropagation();
    }
})


window.addEventListener('keydown', (e) => {
    let keyNum = e.key;
    if(keyNum === "Escape"){
        wholePageContainer.style.filter = "brightness(1)";
        aboutUsSignImageDiv.style.transform = "translateY(-936px)";
        aboutUsSignImageDiv.style.opacity = "0";
    }
})

wholePageContainer.addEventListener("click", (event)=>{
    if(window.innerWidth <= 830){ 
        wholePageContainer.style.filter = "brightness(1)";
        AboutUsWindowDiv.style.top = "761px";
        AboutUsWindowDiv.style.opacity = "0";
        setTimeout(() => {
            AboutUsWindowDiv.style.display = "none";
        }, 1000);
    }else{
        wholePageContainer.style.filter = "brightness(1)";
        aboutUsSignImageDiv.style.transform = "translateY(-936px)";
        aboutUsSignImageDiv.style.opacity = "0";
    }
    console.log("whole pafe container is active")
})

signImage.addEventListener("click", (event)=>{
    event.stopPropagation();
});

firstTwoBiosContainer.addEventListener("click", (event)=>{
    event.stopPropagation();
})
secondtTwoBiosContainer.addEventListener("click", (event)=>{
    event.stopPropagation();
})
biosInnerContainer.addEventListener("click", (event)=>{
    event.stopPropagation();
})


for(let i = 2; i < listItemDivs.length && i>=0; i--){
    listItemDivs[i].addEventListener('animationend', ()=>{
        if(i==0){
            listItemDivs[0].style.top= "0px";
        }else if(i==1){
            listItemDivs[1].style.top= "60px";
        }else{
            listItemDivs[2].style.top= "120px";
        }
    });
}


