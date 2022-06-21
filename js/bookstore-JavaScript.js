// GLOBAL////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// NAVBAR +  SIDEBAR GLOBAL///////////////////////////////////////////////////////

let widthCheck = window.innerWidth;
let darkOverlay = document.querySelector('.dark-overlay');
let navBar = document.querySelector('.navbar-container');
let SecondNavbar = document.querySelector('.second-navbar-container');
let tabsMenuButton = document.querySelector('.sublist-icon-div');
let tabsMenu = document.querySelector('.tabs-parent');
let sidebar = document.querySelector('.sidebar-parent');
let sidebarCloseBtn = document.querySelector('.close-btn-sidebar-div');
let sidebarRevealBtn= document.querySelector('.sidebar-left-arrow-icon-div');
let sidebarBtnWithoutMediaQuery = document.querySelector('.third-icon-div');
let toggleMenu = false;


// carosusel GLOBAL//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let imagesContainer = document.querySelector('.images-container');
let imagesDivs = document.querySelectorAll('.img-div');
let carosuselRightArrow = document.querySelector('.carosusel-right-arrow');
let carosuselLeftArrow = document.querySelector('.carosusel-left-arrow');
let carouselBulletKeys = document.querySelectorAll('.carousel-bullet-key');

// adam-wolf image content/////////////////////////////////////////////////////////////////////
let adamWolfImgDiv = document.querySelector('.adam-wolf-img-div');
let loveImgDiv = document.querySelector('.love-img-div');
let redCircleDiv = document.querySelector('.red-circle-div');
let eiffelTowerDiv = document.querySelector('.eiffel-tower-div');
let adamWolfReadMoreBtn = document.querySelector('.adam-wolf-read-more-btn');
let adamWolfFirstPara = document.querySelector('.adam-wolf-para-pool p:nth-child(1)');
let adamWolfSecondPara = document.querySelector('.adam-wolf-para-pool p:nth-child(2)');
let adamWolfThirdPara = document.querySelector('.adam-wolf-para-pool p:nth-child(3)');

//night image content////////////////////////////////////////////////////////////////////////////
let moonParaDiv = document.querySelector('.moon-para-div');
let nightImgSecondPara = document.querySelector('.night-img-second-para');
let nightImgThirdPara = document.querySelector('.night-img-third-para');
let nightImgReadMoreBtn = document.querySelector('.night-img-read-more-btn');

// imagine image content//////////////////////////////////////////////////////////////////////////
let imagineImgDiv = document.querySelector('.imagine-img-div');
let redCircleImagineDiv = document.querySelector('.red-circle-imagine-div');
let imagineFirstPara = document.querySelector('.imagine-para-pool p:nth-child(1)');
let imagineSecondPara = document.querySelector('.imagine-para-pool p:nth-child(2)');
let imagineThirdPara = document.querySelector('.imagine-para-pool p:nth-child(3)');
let imagineReadMoreBtn = document.querySelector('.imagine-read-more-btn');




// END OF GLOBAL/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ALL FUNCTIONS/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  THIS FUNCTION TO SHOW OR HIDE THE SECOND NAVBAR////////////////////////////

function showOrHideNavbar(){
    let checkPos = 126;
    if(currentPosition > previousPosition || currentPosition <= checkPos ){
        SecondNavbar.style.transform = 'translateY(-69px)';
    }else{
        SecondNavbar.style.transform = 'translateY(0px)';
    }
    previousPosition = currentPosition;
}

// THOSE FUCNTIONS ARE USED TO MAKE THE CAROUSEL MOVE TO THE LEFT AUTOMATICALLY ///

function roller1(){
    console.log(`this is roller1`);
    automaticRolling1 = setInterval(() => {
        if(rightArrowClicked == false){
            nextPic();
        }
    }, 6000);
}

function roller2(){
    console.log(`this is roller2`);
    automaticRolling2 = setInterval(() => {
        if(leftArrowClicked == false){
            nextPic();
        }
    }, 6000);
}

// THIS FUNCTION IS USED TO MAKE THE CAROUSEL MOVE TO THE left//////////////////

function nextPic(){
    if(counter == carosuselCounter){
        counter = 1;
        imagesContainer.style.transition = 'all 0.5s';
        imagesContainer.style.transform= `translateX(${-width*(counter+1)}px)`;
        for(let i = 0; i < carouselBulletKeys.length; i++){
            carouselBulletKeys[counter-1].style.backgroundColor = 'black';
            if(i == (counter-1)){
                continue;
            }else{
                carouselBulletKeys[i].style.backgroundColor = 'rgb(153, 153, 153)';
            }
        }
    }else if(counter == carosuselCounter-1){
        imagesContainer.style.transition = 'all 0.5s';
        imagesContainer.style.transform= `translateX(${-width*(counter+1)}px)`;
        counter++;
    }else{
        imagesContainer.style.transition = 'all 0.5s';
        imagesContainer.style.transform= `translateX(${-width*(counter+1)}px)`;
        counter++;
        for(let i = 0; i < carouselBulletKeys.length; i++){
            carouselBulletKeys[counter-1].style.backgroundColor = 'black';
            if(i == (counter-1)){
                continue;
            }else{
                carouselBulletKeys[i].style.backgroundColor = 'rgb(153, 153, 153)';
            }
        }
    }
    console.log(carosuselCounter);
    if(counter == 2 || counter == 3){
        carosuselRightArrow.style.color ='white';
        carosuselLeftArrow.style.color = 'white';
    }else if(counter == 1){
        carosuselRightArrow.style.color ='black';
        carosuselLeftArrow.style.color = 'black';
    }
}

// THIS FUNCTION IS USED TO MAKE THE CAROUSEL MOVE TO THE RIGHT/////////////////

function previousPic(){
    if(counter == 0){
        counter = carosuselCounter-1;
        imagesContainer.style.transition = 'all 0.5s';
        imagesContainer.style.transform= `translateX(${-width*(counter-1)}px)`;
        for(let i = 0; i < carouselBulletKeys.length; i++){
            carouselBulletKeys[counter-1].style.backgroundColor = 'black';
            if(i == (counter-1)){
                continue;
            }else{
                carouselBulletKeys[i].style.backgroundColor = 'rgb(153, 153, 153)';
            }
        }
    }else if(counter == 1){
        imagesContainer.style.transition = 'all 0.5s';
        imagesContainer.style.transform= `translateX(${-width*(counter-1)}px)`;
        for(let i = 0; i < carouselBulletKeys.length; i++){
            carouselBulletKeys[counter-1].style.backgroundColor = 'black';
            if(i == (counter-1)){
                continue;
            }else{
                carouselBulletKeys[i].style.backgroundColor = 'rgb(153, 153, 153)';
            }
        }
        counter--;
    }else{
        imagesContainer.style.transition = 'all 0.5s';
        imagesContainer.style.transform= `translateX(${-width*(counter-1)}px)`;
        counter--;
        for(let i = 0; i < carouselBulletKeys.length; i++){
            carouselBulletKeys[counter-1].style.backgroundColor = 'black';
            if(i == (counter-1)){
                continue;
            }else{
                carouselBulletKeys[i].style.backgroundColor = 'rgb(153, 153, 153)';
            }
        }
    }
    if(counter == 2 || counter == 3){
        carosuselRightArrow.style.color ='white';
        carosuselLeftArrow.style.color = 'white';
    }else if(counter == 1){
        carosuselRightArrow.style.color ='black';
        carosuselLeftArrow.style.color = 'black';
    }
}

// this function is used to kepp track of the animation of all images and the transition of the two clone images//////////////////////////////
function enableOrDisableInnerAnimation(){
    if(counter == 1){
        adamWolfImgDiv.classList.add('adam-wolf-img-div-animation');
        loveImgDiv.classList.add('love-img-div-animation');
        redCircleDiv.classList.add('red-circle-div-animation');
        eiffelTowerDiv.classList.add('love-img-div-animation');
        adamWolfReadMoreBtn.classList.add('adam-wolf-read-more-btn-animation');
        adamWolfFirstPara.classList.add('adam-wolf-para-pool-1st-para-animation');
        adamWolfSecondPara.classList.add('adam-wolf-para-pool-2nd-para-animation');
        adamWolfThirdPara.classList.add('adam-wolf-para-pool-3rd-para-animation');
    }else{
        adamWolfImgDiv.classList.remove('adam-wolf-img-div-animation');
        loveImgDiv.classList.remove('love-img-div-animation');
        redCircleDiv.classList.remove('red-circle-div-animation');
        eiffelTowerDiv.classList.remove('love-img-div-animation');
        adamWolfReadMoreBtn.classList.remove('adam-wolf-read-more-btn-animation');
        adamWolfFirstPara.classList.remove('adam-wolf-para-pool-1st-para-animation');
        adamWolfSecondPara.classList.remove('adam-wolf-para-pool-2nd-para-animation');
        adamWolfThirdPara.classList.remove('adam-wolf-para-pool-3rd-para-animation');
    }
    if(counter == 2){
        moonParaDiv.classList.add('moon-para-div-animation');
        nightImgSecondPara.classList.add('night-img-second-para-animation');
        nightImgThirdPara.classList.add('night-img-third-para-animation');
        nightImgReadMoreBtn.classList.add('night-img-read-more-btn-animation');

        adamWolfImgDiv.classList.remove('adam-wolf-img-div-animation');
        loveImgDiv.classList.remove('love-img-div-animation');
        redCircleDiv.classList.remove('red-circle-div-animation');
        eiffelTowerDiv.classList.remove('love-img-div-animation');
        adamWolfReadMoreBtn.classList.remove('adam-wolf-read-more-btn-animation');
        adamWolfFirstPara.classList.remove('adam-wolf-para-pool-1st-para-animation');
        adamWolfSecondPara.classList.remove('adam-wolf-para-pool-2nd-para-animation');
        adamWolfThirdPara.classList.remove('adam-wolf-para-pool-3rd-para-animation');

        imagineImgDiv.classList.remove('imagine-img-div-animation');
        redCircleImagineDiv.classList.remove('red-circle-imagine-div-animation');
        imagineFirstPara.classList.remove('imagine-para-pool-1st-para-animation');
        imagineSecondPara.classList.remove('imagine-para-pool-2nd-para-animation');
        imagineThirdPara.classList.remove('imagine-para-pool-3rd-para-animation');
        imagineReadMoreBtn.classList.remove('imagine-read-more-btn-animation');
    }else{
        moonParaDiv.classList.remove('moon-para-div-animation');
        nightImgSecondPara.classList.remove('night-img-second-para-animation');
        nightImgThirdPara.classList.remove('night-img-third-para-animation');
        nightImgReadMoreBtn.classList.remove('night-img-read-more-btn-animation');
    }
    if(counter == 3){
        imagineImgDiv.classList.add('imagine-img-div-animation');
        redCircleImagineDiv.classList.add('red-circle-imagine-div-animation');
        imagineFirstPara.classList.add('imagine-para-pool-1st-para-animation');
        imagineSecondPara.classList.add('imagine-para-pool-2nd-para-animation');
        imagineThirdPara.classList.add('imagine-para-pool-3rd-para-animation');
        imagineReadMoreBtn.classList.add('imagine-read-more-btn-animation');
    }else{
        imagineImgDiv.classList.remove('imagine-img-div-animation');
        redCircleImagineDiv.classList.remove('red-circle-imagine-div-animation');
        imagineFirstPara.classList.remove('imagine-para-pool-1st-para-animation');
        imagineSecondPara.classList.remove('imagine-para-pool-2nd-para-animation');
        imagineThirdPara.classList.remove('imagine-para-pool-3rd-para-animation');
        imagineReadMoreBtn.classList.remove('imagine-read-more-btn-animation');
    }
    if(counter == carosuselCounter){
        counter = 1;
        bulletKeysCounter =  carosuselCounter-1;
        imagesContainer.style.transition = 'none';
        imagesContainer.style.transform= `translateX(${-width*counter}px)`;
        for(let i = 0; i < carouselBulletKeys.length; i++){
            carouselBulletKeys[counter-1].style.backgroundColor = 'black';
            if(i == (counter-1)){
                continue;
            }else{
                carouselBulletKeys[i].style.backgroundColor = 'rgb(153, 153, 153)';
            }
        }
        carosuselRightArrow.style.color ='black';
        carosuselLeftArrow.style.color = 'black';
        adamWolfImgDiv.classList.add('adam-wolf-img-div-animation');
        loveImgDiv.classList.add('love-img-div-animation');
        redCircleDiv.classList.add('red-circle-div-animation');
        eiffelTowerDiv.classList.add('love-img-div-animation');
        adamWolfReadMoreBtn.classList.add('adam-wolf-read-more-btn-animation');
        adamWolfFirstPara.classList.add('adam-wolf-para-pool-1st-para-animation');
        adamWolfSecondPara.classList.add('adam-wolf-para-pool-2nd-para-animation');
        adamWolfThirdPara.classList.add('adam-wolf-para-pool-3rd-para-animation');

    }else if(counter == 0){
        counter = carosuselCounter-1;
        bulletKeysCounter = carosuselCounter-1;
        imagesContainer.style.transition = 'none';
        imagesContainer.style.transform= `translateX(${-width*counter}px)`;
        for(let i = 0; i < carouselBulletKeys.length; i++){
            carouselBulletKeys[counter-1].style.backgroundColor = 'black';
            if(i == (counter-1)){
                continue;
            }else{
                carouselBulletKeys[i].style.backgroundColor = 'rgb(153, 153, 153)';
            }
        }
        carosuselRightArrow.style.color ='white';
        carosuselLeftArrow.style.color = 'white';

        imagineImgDiv.classList.add('imagine-img-div-animation');
        redCircleImagineDiv.classList.add('red-circle-imagine-div-animation');
        imagineFirstPara.classList.add('imagine-para-pool-1st-para-animation');
        imagineSecondPara.classList.add('imagine-para-pool-2nd-para-animation');
        imagineThirdPara.classList.add('imagine-para-pool-3rd-para-animation');
        imagineReadMoreBtn.classList.add('imagine-read-more-btn-animation');
    }
}

// END OF ALL FUNCTIONS////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// toggle menu button and sidebar (media query)////////////////////////////////////////////////////////////////////////////////////////////

sidebarCloseBtn.addEventListener('click', () => {
    sidebar.style.width = '0px';
    darkOverlay.style.filter ='brightness(100%)';
})

sidebarRevealBtn.addEventListener('click', () => {
    sidebar.style.width = '100vw';
})

tabsMenuButton.addEventListener('click', ()=> {
    if(toggleMenu== true){
        tabsMenu.style.height ='0px';
        toggleMenu = false
    }else{  
        tabsMenu.style.height ='580px';
        toggleMenu = true;
    }
})

//toggle sidebar button for 1025px screen sizes and above ////////////////////////////////////////////////////////////////////////////////////
sidebarBtnWithoutMediaQuery.addEventListener('click', () => {
    sidebar.style.width = '383px';
    darkOverlay.style.filter ='brightness(0.5)'
})

let previousPosition = 0;
let currentPosition = 0;

document.addEventListener('scroll', function() {
    currentPosition = window.scrollY;
    showOrHideNavbar();
});


// CAROSUSEL IMAGE SLIDER////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let width = imagesDivs[0].clientWidth;
let carosuselCounter = imagesDivs.length-1;
let bulletKeysCounter =0;
let fristround = true;
let bulletKeyIndex = 0;
let counter = 1;
let rightArrowClicked = false;
let leftArrowClicked = false;
let automaticRolling1;
let automaticRolling2;

imagesContainer.style.transform= `translateX(${-width}px)`;
carouselBulletKeys[0].style.backgroundColor = 'black';
roller1(); // CAROSUEL AUTOPILOT MODE


carosuselRightArrow.addEventListener('click', () => {
    rightArrowClicked = true;
    clearInterval(automaticRolling1);
    clearInterval(automaticRolling2);
    setTimeout(roller1, 2500);
    setTimeout(() =>{
    rightArrowClicked = false;
    }, 2000);
    nextPic();
})


carosuselLeftArrow.addEventListener('click', () => {
    leftArrowClicked = true;
    clearInterval(automaticRolling2);
    clearInterval(automaticRolling1);
    setTimeout(roller2, 2500);
    setTimeout(() =>{
        leftArrowClicked = false;
    }, 2000);
    previousPic();
})


imagesContainer.addEventListener('transitionend', () => {   // THIS KEEPS TRACK OF THE 2 CLONE  IMAGES AND FOR ANIMATION TIMING INSIDE EACH IMAGE
    enableOrDisableInnerAnimation();
    console.log(`this is the counter ${counter}`);
})


for(let i = 0; i < carouselBulletKeys.length; i++){             // THIS CONNECTS THE NAVIGATION BULLET KEYS WITH THE IMAGES
    carouselBulletKeys[i].addEventListener('click', () => {
        counter = i;
        imagesContainer.style.transition = 'all 0.5s';
        imagesContainer.style.transform= `translateX(${-width*(counter+1)}px)`;
        counter++;
        carouselBulletKeys[counter-1].style.backgroundColor = 'black';
        arrowClicked = true;
        clearInterval(automaticRolling1);
        clearInterval(automaticRolling2);
        setTimeout(roller1, 2500);
        setTimeout(() =>{
            arrowClicked = false;
        }, 2000);
        for(let j = 2; j < carouselBulletKeys.length && j>=0; j--){
            if(i==j){
                continue;
            }else{
                carouselBulletKeys[j].style.backgroundColor = 'rgb(153, 153, 153)'
            }
        }
        if(counter == 2 || counter == 3){
            carosuselRightArrow.style.color ='white';
            carosuselLeftArrow.style.color = 'white';
        }else if(counter == 1){
            carosuselRightArrow.style.color ='black';
            carosuselLeftArrow.style.color = 'black';
        }   
    })
}

