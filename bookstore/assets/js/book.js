var cook = document.getElementById('cooking');
var all = document.getElementById('all');
var fantacy = document.getElementById('fantacy');
var history = document.getElementById('history-type');
var other = document.getElementById('other');
var content = '';
var books = JSON.parse(localStorage.getItem('arrivals'));
var arrivalsContainer = document.getElementById('arrivals');



let arrivalsArray =[
    arrivalObjcet ={
        category:"fantasy",
        arrivalsImg: "assets/images/books_cause.png",
        Author:"MICHAEL ALICE",
        Title:"Books For a Cause",
        Price: "300",
        OldPrice:"110"
    },
    arrivalObjcet ={
        category:"cooking",
        arrivalsImg: "assets/images/cooked_meals.png",
        Author:"Alice james",
        Title:"Home Made Meals",
        Price: "310",
        OldPrice:""
    },
    arrivalObjcet ={
        category:"",
        arrivalsImg: "assets/images/donate_book.png",
        Author:"Downald william ",
        Title:"Donate a Book",
        Price: "",
        OldPrice:""
    },
    arrivalObjcet ={
        category:"cooking",
        arrivalsImg: "assets/images/eating.png",
        Author:"downald william",
        Title:"Adventurous Eating",
        Price: "500",
        OldPrice:""
    },
    arrivalObjcet ={
        category:"cooking",
        arrivalsImg: "assets/images/sea_food.png",
        Author:"Adan Baid",
        Title:"Seafood Gourment",
        Price: "500",
        OldPrice:""
    },
    arrivalObjcet ={
        category:"",
        arrivalsImg: "assets/images/stadium.png",
        Author:"John Erik",
        Title:"The Stadium by Night",
        Price: "320",
        OldPrice:"700"
    },
    arrivalObjcet ={
        category:"fantasy",
        arrivalsImg: "./assets/images/stars.png",
        Author:"Alice James",
        Title:"When The Stars Align",
        Price: "300",
        OldPrice:""
    },
    arrivalObjcet ={
        category:"fantasy",
        arrivalsImg: "./assets/images/structures.png",
        Author:"MICHAEL ALICE",
        Title:"Beauty of Structures",
        Price: "310",
        OldPrice:""
    },
    arrivalObjcet ={
        category:"fantasy",
        arrivalsImg: "assets/images/visit_north.png",
        Author:"Adam Baid",
        Title:"Vistit in the North",
        Price: "410",
        OldPrice:"700"
    },
    arrivalObjcet ={
        category:"fantasy",
        arrivalsImg: "assets/images/wake_me_up.png",
        Author:"John Erik",
        Title:"Wake Me up",
        Price: "410",
        OldPrice:"700"
    }
];

// display();

if(localStorage.getItem('arrivalsArray')){
    arrivalsArray = JSON.parse(localStorage.getItem('arrivalsArray'));
    display();
}else{
    localStorage.setItem('arrivalsArray',JSON.stringify(arrivalsArray));
    display();
}


//function to display the arrivals 
function display(){
    for (i = 0; i < arrivalsArray.length; i++) {
      
        content += `
  <div class="card">
   <div class="img-icons">
  <img src="${arrivalsArray[i].arrivalsImg}" class="img-card card-img-top" alt="...">
  <div class="icons-container">
  <i class="fa-solid fa-link"></i>
  <i class="fa-solid fa-heart"></i>
  <i class="fa-solid fa-magnifying-glass"></i>
  </div>
  <div class="middle">
  
  </div>
  </div>
        <div class="card-body">
          <h5 class="author">${arrivalsArray[i].Author}</h5>
          <h4 class="card-title">${arrivalsArray[i].Title}</h4>
          <div class="prices">
          <p class="price">${arrivalsArray[i].Price || ''}$ </p>
          <del>${`${arrivalsArray[i].OldPrice} ${arrivalsArray[i].OldPrice?'$' : ''}`  }</del>
          </div>
       </div>


  
 
</div>
  
  `
    }
    arrivalsContainer.innerHTML = content;
    localStorage.setItem("arrivalsArray",JSON.stringify(arrivalsArray));
}








//function that filters the cooking books 
cook.addEventListener("click", ()=>{
    arrivalsContainer.innerHTML = '';
    content = ``;
    for(let i =0; i < arrivalsArray.length; i++){
        if(arrivalsArray[i].category == "cooking"){
            content += `
            <div class="card">
            <div class="img-icons">
            <img src="${arrivalsArray[i].arrivalsImg}" class="img-card card-img-top" alt="...">
            <div class="icons-container">
            <i class="fa-solid fa-link"></i>
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div class="middle">
            
            </div>
            </div>
            <div class="card-body">
            <h5 class="author">${arrivalsArray[i].Author}</h5>
            <h4 class="card-title">${arrivalsArray[i].Title}</h4>
            <div class="prices">
            <p class="price">${arrivalsArray[i].Price || ''}$ </p>
            <del>${`${arrivalsArray[i].OldPrice} ${arrivalsArray[i].OldPrice?'$' : ''}`  }</del>
            </div>
            </div>
            </div>
            `
        }
        
    }
    arrivalsContainer.innerHTML = content;
})


//function that shows all books 
all.addEventListener("click", ()=>{
    arrivalsContainer.innerHTML = '';
    content = ``;
    display();
}) 

//function that shows fantacy books 
fantacy.addEventListener("click", ()=>{
    arrivalsContainer.innerHTML = '';
    content = ``;
    for(let i =0; i < arrivalsArray.length; i++){
        if(arrivalsArray[i].category == "fantasy"){
            content += `
            <div class="card">
            <div class="img-icons">
            <img src="${arrivalsArray[i].arrivalsImg}" class="img-card card-img-top" alt="...">
            <div class="icons-container">
            <i class="fa-solid fa-link"></i>
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div class="middle">
            
            </div>
            </div>
            <div class="card-body">
            <h5 class="author">${arrivalsArray[i].Author}</h5>
            <h4 class="card-title">${arrivalsArray[i].Title}</h4>
            <div class="prices">
            <p class="price">${arrivalsArray[i].Price || ''}$ </p>
            <del>${`${arrivalsArray[i].OldPrice} ${arrivalsArray[i].OldPrice?'$' : ''}`  }</del>
            </div>
            </div>
            </div>
            `
        }
    }
    arrivalsContainer.innerHTML = content;
})