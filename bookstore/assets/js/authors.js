var path = window.location.pathname;
var page = path.split("/").pop();


let title = document.querySelector('.title_input');
let authorName = document.querySelector('.name');
let authorInfo = document.querySelector('.authorInfo');
let addBtn = document.querySelector(".add_btn");
let inputFileSelector = document.querySelector('.input-file-selector');
let data =document.querySelector("#data");
let updateBtn = document.querySelectorAll("#updateBtn");
let theTeamDiv= document.querySelector(".theTeam");
let table_title = document.querySelectorAll(".table_title");
let table_name = document.querySelectorAll(".table_name");
let table_info = document.querySelectorAll(".table_info");
let clearAll = document.querySelector(".clr-btn");
let teamM =Array.from(document.querySelectorAll(".teamM"));
let img;
let imgFiles = document.querySelector(".img-file");
let tabelIndex;
let author;
let servicesImg = document.querySelectorAll(".services-img");
let inputs = document.querySelectorAll(".inputs");
let labelError = document.querySelector(".labelError");
let labelErrorF = document.querySelector(".labelErrorF");
let labelErrorS = document.querySelector(".labelErrorS");
let authors=[
    author ={
    
    image: "../img/default-user-profile-pic.jpg",
    Title:"author",
    Name:"Sahar Abdul Aziz",
    AuthorInfo:'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Quia, Eum.'
},
author ={
   
    image: "../img/ayman-pic.JPG",
    Title:"designer",
    Name:"ayman",
    AuthorInfo:'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Quia, Eum.'
},
author ={
    
    image: "../img/mohammad.jpg",
    Title:"consultant",
    Name:"mohammad",
    AuthorInfo:'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Quia, Eum.'
},
author ={
    
    image: "../img/Momen.jpg",
    Title:"support",
    Name:"momen",
    AuthorInfo:'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Quia, Eum.'
}
];
inputFileSelector.onclick=()=>{
    imgFiles.click();
}

// displayData();
// displayDataInTable();


if(localStorage.getItem("authors")){
    authors=JSON.parse(localStorage.getItem("authors"));
    displayDataInTable();
    displayData();
}else{
    localStorage.setItem("authors",JSON.stringify(authors));
    displayDataInTable();
    displayData();
}

addBtn.addEventListener("click",()=>{
    if(addBtn.innerHTML=="update Author"){
        displayDataInTable();
        updateRow(); 
    }else{
        addAuthor();
        displayDataInTable();
        displayData();
        clearInputs();
    }
    
        
    localStorage.setItem("authors",JSON.stringify(authors));
})
imgFiles.addEventListener("change", function(){
    const reader = new FileReader();
    reader.addEventListener('load', ()=>{
        img = reader.result;
    }) 
    reader.readAsDataURL(this.files[0]);
});
function addAuthor(){
     author ={
        image:img,
        Title:title.value,
        Name:authorName.value,
        AuthorInfo:authorInfo.value
    }
    authors.push(author);
}
function displayDataInTable(){
    let result='';
    for(let i=0;i<authors.length;i++){
        result+=`
        <tr>
            <td>${i}</td>
            <td class=" col-xl-1">${authors[i].Title}</td>
            <td class=" col-xl-1">${authors[i].Name}</td>
            <td class=" col-xl-3">${authors[i].AuthorInfo}</td>
            <td class=" col-xl-1"><img class="table-image" src="${authors[i].image}"></td>
            <td><button class="update-table-button btn btn-outline-info"  onclick="getAuthorsData(${i})"> Update </button></td>
            <td><button class=" delete-table-button deleteBtn btn btn-outline-danger" onclick="deleteTableAuthor(${i})"> Delete </button></td>
        </tr>
        `
    }
    data.innerHTML=result;
}
function getAuthorsData(i){
    addBtn.innerHTML="update Author";
    title.value=authors[i].Title;
    authorName.value=authors[i].Name;
    authorInfo.value=authors[i].AuthorInfo;
    tabelIndex=i;
}
function updateRow(){
    if(img==undefined){
        authors[tabelIndex].Title=title.value;
        authors[tabelIndex].Name=authorName.value;
        authors[tabelIndex].AuthorInfo=authorInfo.value;
    }else{
        authors[tabelIndex].Title=title.value;
        authors[tabelIndex].Name=authorName.value;
        authors[tabelIndex].AuthorInfo=authorInfo.value;
        authors[tabelIndex].image=img;
    }
    clearInputs();
    displayDataInTable();
    displayData();
    addBtn.innerHTML="Add author";
}
function clearInputs(){
     for(let i=0;i<inputs.length;i++){
        inputs[i].value="";
    }
}
function displayData(){
    if(page=="authors.html"){

    }else{
        let result='';
        for(let i =0; i <authors.length;i++){
            result+=`
            <div class="teamM text-center  w-25">
                <div class="services-img-div m-auto">
                <img src="${authors[i].image}" alt="${authors[i].Name}" class="services-img" >
                </div>
                <p class="table_title text-center text-uppercase lightGrey mt-4">${authors[i].Title}</p>
                <h3 class="table_name text-capitalize">${authors[i].Name}</h3>
                <p class="table_info text-capitalize ">${authors[i].AuthorInfo}</p>
            </div>
            `
        }
        theTeamDiv.innerHTML=result;
        localStorage.setItem("authors",JSON.stringify(authors)); 
    }
 
}
function deleteTableAuthor(i){
    authors.splice(i,1);
    localStorage.setItem("authors",JSON.stringify(authors));
    displayDataInTable();
    displayData();
}
function clearAllTableData(){
    authors=[];
    data.innerHTML="";
    displayDataInTable();
    displayData();
    localStorage.setItem("authors",JSON.stringify(authors));
}
clearAll.addEventListener("click",()=>{
    clearAllTableData();
})

labelError.classList.add("d-none");
title.onkeyup=function(){
    var authorPattern= /^[A-Z][^0123456789!@#$%^&*()_+{}|":?>/*-+<`]{2,15}$/;
    if(authorPattern.test(title.value)){
        addBtn.removeAttribute("disabled");
        title.classList.add('is-valid');
        title.classList.remove('is-invalid');
        labelError.classList.add("d-none")
    }else{
        addBtn.setAttribute="disabled","true";
        title.classList.replace('is-valid','is-invalid');
        labelError.classList.remove("d-none");
    }
}

labelErrorF.classList.add("d-none");
authorName.onkeyup=function(){
    var authorPattern= /^[A-Z][^0123456789!@#$%^&*()_+{}|":?>/*-+<`]{2,15}$/;
    if(authorPattern.test(authorName.value)){
        addBtn.removeAttribute("disabled");
        authorName.classList.add('is-valid');
        authorName.classList.remove('is-invalid');
        labelErrorF.classList.add("d-none")
    }else{
        addBtn.setAttribute="disabled","true";
        authorName.classList.replace('is-valid','is-invalid');
        labelErrorF.classList.remove("d-none");
    }
}

labelErrorS.classList.add("d-none");
authorInfoTextA.onkeyup=function(){
    var authorPattern= /^[A-Z][^0123456789!@#$%^&*()_+{}|":?>/*-+<`]{2,100}$/;
    if(authorPattern.test(authorInfoTextA.value)){
        addBtn.removeAttribute("disabled");
        authorInfoTextA.classList.add('is-valid');
        authorInfoTextA.classList.remove('is-invalid');
        labelErrorS.classList.add("d-none")
    }else{
        addBtn.setAttribute="disabled","true";
        authorInfoTextA.classList.replace('is-valid','is-invalid');
        labelErrorS.classList.remove("d-none");
    }
}
