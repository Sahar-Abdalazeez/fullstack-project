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
        category:"fantacy",
        arrivalsImg: "assets/images/books_cause.png",
        Author:"",
        Title:"",
        Price: "",
        OldPrice:""
    },
    arrivalObjcet ={
        category:"cooking",
        arrivalsImg: "assets/images/cooked_meals.png",
        Author:"",
        Title:"",
        Price: "",
        OldPrice:""
    },
    arrivalObjcet ={
        category:"",
        arrivalsImg: "assets/images/donate_book.png",
        Author:"",
        Title:"",
        Price: "",
        OldPrice:""
    },
    arrivalObjcet ={
        category:"cooking",
        arrivalsImg: "assets/images/eating.png",
        Author:"",
        Title:"",
        Price: "",
        OldPrice:""
    },
    arrivalObjcet ={
        category:"cooking",
        arrivalsImg: "assets/images/sea_food.png",
        Author:"",
        Title:"",
        Price: "",
        OldPrice:""
    },
    arrivalObjcet ={
        category:"",
        arrivalsImg: "assets/images/stadium.png",
        Author:"",
        Title:"",
        Price: "",
        OldPrice:""
    },
    arrivalObjcet ={
        category:"",
        arrivalsImg: "assets/images/stars.png",
        Author:"",
        Title:"",
        Price: "",
        OldPrice:""
    },
    arrivalObjcet ={
        category:"",
        arrivalsImg: "assets/images/structures.png",
        Author:"",
        Title:"",
        Price: "",
        OldPrice:""
    },
    arrivalObjcet ={
        category:"",
        arrivalsImg: "assets/images/visit_north.png",
        Author:"",
        Title:"",
        Price: "",
        OldPrice:""
    },
    arrivalObjcet ={
        category:"",
        arrivalsImg: "assets/images/wake_me_up.png",
        Author:"",
        Title:"",
        Price: "",
        OldPrice:""
    }
];

function addNewBook() {
    arrivalObjcet = {
        category: bookType.value,
        arrivalsImg: recentImg,
        Author: author.value,
        Title: title.value,
        Price: price.value,
        OldPrice: priceBeforeDiscount.value
    }
    arrivalsArray.push(arrivalObjcet);
    localStorage.setItem("arrivalsArray",JSON.stringify(arrivalsArray));
}

// display();

if(localStorage.getItem('arrivals')){
    arrivalsArray = JSON.parse(localStorage.getItem('arrivalsArray'));
    display();
}else{
    localStorage.setItem('arrivals',JSON.stringify(arrivalsArray));
    display();
}



// var mybooks = JSON.parse(localStorage.getItem('new-arrivals'));

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
            <p class="price">${arrivalsArray[i].price || ''}$ </p>
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
        if(arrivalsArray[i].category == "fantacy"){
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
            <p class="price">${arrivalsArray[i].price || ''}$ </p>
            <del>${`${arrivalsArray[i].OldPrice} ${arrivalsArray[i].OldPrice?'$' : ''}`  }</del>
            </div>
            </div>
            </div>
            `
        }
    }
    arrivalsContainer.innerHTML = content;
})