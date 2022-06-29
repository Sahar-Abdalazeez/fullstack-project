// GLOBAL////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let darkOverlay = document.querySelector('.dark-overlay');

darkOverlay.addEventListener('click', () => {
     if(loginbtnclicked == true && sidebarClicked == false){
        popupLoginParent.style.transform = 'translateY(300px)';
        popupLoginParent.style.opacity = '0';
        darkOverlay.style.filter ='brightness(1)';
        loginbtnclicked = false;
        loginBtn[0].removeAttribute('disabled');
        loginBtn[1].removeAttribute('disabled');
        setTimeout(() =>{
            popupLoginParent.style.display = 'none';
        },700);
     }else if(sidebarClicked == true){
        sidebar.style.width = '0px';
        darkOverlay.style.filter ='brightness(1)';
        sidebarClicked = false;
     }
})

// NAVBAR +  SIDEBAR GLOBAL///////////////////////////////////////////////////////

let widthCheck = window.innerWidth;
let navBar = document.querySelector('.navbar-container');
let SecondNavbar = document.querySelector('.second-navbar-container');
let tabsMenuButton = document.querySelector('.sublist-icon-div');
let tabsMenu = document.querySelector('.tabs-parent');
let sidebar = document.querySelector('.sidebar-parent');
let sidebarCloseBtn = document.querySelector('.close-btn-sidebar-div');
let sidebarRevealBtn= document.querySelector('.sidebar-left-arrow-icon-div');
let sidebarBtnWithoutMediaQuery = document.querySelectorAll('.third-icon-div');
let toggleMenu = false;
let sidebarClicked = false;


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

// popup log in window global//////////////////////////////////////////////////////////////////////
let popupLoginParent = document.querySelector('.popup-login-parent');
let popupLoginInnerContainer = document.querySelector('.popup-login-inner-container');
let labels = document.querySelectorAll('.input-container label');
let loginBtn = document.querySelectorAll('.login-btn');
let PopupLoginBtn = document.querySelector('.popup-login-btn');
let submitBtnClicked = false;
let username = document.querySelector('.username');
let password = document.querySelector('.password');
let loggedInPopupParent = document.querySelector('.logged-in-popup-parent');
let loggedInPara = document.querySelector('.logged-in-para');
let span_1 = document.querySelector('.span-1');
let span_2 = document.querySelector('.span-2');
let span_3 = document.querySelector('.span-3');
let span_4 = document.querySelector('.span-4');
let loginPara = document.querySelector('.login-para');
let adminTabs = document.querySelectorAll('.admn-tab-java');





// END OF GLOBAL/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ALL FUNCTIONS/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  THIS FUNCTION TO SHOW OR HIDE THE SECOND NAVBAR ////////////////////////////

function showOrHideNavbar(){
    currentPosition = window.scrollY;
    if(currentPosition > previousPosition || currentPosition <= checkPos ){
        SecondNavbar.style.transform = 'translateY(-69px)';
    }else{
        SecondNavbar.style.transform = 'translateY(0px)';
    }
    previousPosition = currentPosition;
}

// THOSE FUCNTIONS ARE USED TO MAKE THE CAROUSEL MOVE TO THE LEFT AUTOMATICALLY ///

function roller1(){
    automaticRolling1 = setInterval(() => {
        if(rightArrowClicked == false){
            nextPic();
        }
    }, 6000);
}

function roller2(){
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

// this function is used to keep track of the animation of all images and the transition of the two clone images//////////////////////////////
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

sidebarCloseBtn.addEventListener('click', () => { //this one also applies for all screen sizes////////////////////////////////////////////
    sidebar.style.width = '0px';
    darkOverlay.style.filter ='brightness(100%)';
    sidebarClicked = false;
})



sidebarRevealBtn.addEventListener('click', () => {
    sidebar.style.width = '100vw';
    sidebarClicked = true;
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

for(let i = 0; i < sidebarBtnWithoutMediaQuery.length; i++){
    sidebarBtnWithoutMediaQuery[i].addEventListener('click', (event) => {
        event.stopPropagation();
        SecondNavbar.style.transform = 'translateY(-69px)';
        sidebar.style.width = '383px';
        darkOverlay.style.filter ='brightness(0.5)';
        sidebarClicked = true;
    })
}



// show or hide second navbar //////////////////////////////////////////////////////////////////////////////////////////////////////////////

let previousPosition = 0;
let currentPosition = 0;
let checkPos = 126;

window.addEventListener('scroll', function(event) {
    event.stopPropagation();
    if(sidebarClicked == true){

    }else{
        showOrHideNavbar();
    }
    
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

// popup log in window/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let loginbtnclicked = false;
popupLoginParent.style.display = 'none'; // this is to hide the login window when the page loads, check line code 5 to see also how display property is removed when the dark overlay is clicked
loggedInPopupParent.style.display = 'none'; 
for(let i=0;i<adminTabs.length;i++){
    adminTabs[i].style.display = 'none'; // to hide the admin tab when the page loads
}
for(let i = 0; i < loginBtn.length; i++){
    loginBtn[i].addEventListener('click', (event) => {
        event.stopPropagation();
        if(loginBtn[i].innerHTML=='Log out'){
            loginBtn[0].innerHTML='Log in';
            loginBtn[1].innerHTML='Log in';
            for(let i=0;i<adminTabs.length;i++){
                adminTabs[i].style.display = 'none';
            }
        }else{
            loginbtnclicked = true;
            loginBtn[i].setAttribute('disabled', 'true');
            popupLoginParent.style.removeProperty('display');
            popupLoginParent.style.transform = 'translateY(300px)';
            setTimeout(() =>{
                popupLoginParent.style.transform = 'translateY(0px)';
                popupLoginParent.style.opacity = '1';
                darkOverlay.style.filter ='brightness(0.5)';
            },100) // i had to set the time-out to make sure the login window is not displayed before the dark overlay was displayed
        }

    })
}


popupLoginParent.addEventListener('click', () => {
    loginBtn[0].removeAttribute('disabled');
    loginBtn[1].removeAttribute('disabled');
    popupLoginParent.style.transform = 'translateY(300px)';
    popupLoginParent.style.opacity = '0';
    darkOverlay.style.filter ='brightness(1)';
    setTimeout(() =>{
        popupLoginParent.style.display = 'none';
    },700)
});


popupLoginInnerContainer.addEventListener('click', (event) => {
    event.stopPropagation();
});



labels.forEach((label) => {
    label.innerHTML = label.innerText
    .split("")
    .map((letter, i) =>`<span style="transition-delay:${i * 50}ms">${letter}</span>`)
    .join("");
});

PopupLoginBtn.addEventListener('click', () => {
    if(username.value == '' || password.value == ''){
        alert('Please fill in all the fields');
    }else if(username.value == 'admin' && password.value == 'admin'){
        loggedInPopupParent.style.removeProperty('display');
        for(let i=0;i<adminTabs.length;i++){
            adminTabs[i].style.removeProperty('display');
        }
        setTimeout(()=>{
            loggedInPopupParent.classList.add('logged-in-popup-parent-opacity-animation');
            loggedInPara.classList.add('logged-in-para-bg-animation');
            span_1.classList.add('first-span-animation');
            span_2.classList.add('second-span-animation');
            span_3.classList.add('third-span-animation');
            span_4.classList.add('fourth-span-animation');
            loginPara.classList.add('logged-in-opacity-animation');
            loggedInPara.addEventListener('animationend', () => {
                setTimeout(() =>{
                    loginBtn[0].removeAttribute('disabled');
                    loginBtn[1].removeAttribute('disabled');
                    popupLoginParent.style.transform = 'translateY(300px)';
                    popupLoginParent.style.opacity = '0';
                    darkOverlay.style.filter ='brightness(1)';
                    setTimeout(() =>{
                        popupLoginParent.style.display = 'none';
                        loggedInPopupParent.style.display = 'none';
                        loggedInPopupParent.classList.remove('logged-in-popup-parent-opacity-animation');
                        loggedInPara.classList.remove('logged-in-para-bg-animation');
                        span_1.classList.remove('first-span-animation');
                        span_2.classList.remove('second-span-animation');
                        span_3.classList.remove('third-span-animation');
                        span_4.classList.remove('fourth-span-animation');
                        loginPara.classList.remove('logged-in-opacity-animation');
                        username.value = '';
                        password.value = '';
                    },700)
                },1500)
            })
        },10)
        loginBtn[0].innerHTML = 'Log out';
        loginBtn[1].innerHTML = 'Log out';
    }else{
        alert('Wrong username or password');
    }

})





