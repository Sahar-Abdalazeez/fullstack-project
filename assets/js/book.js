var cook = document.getElementById('cooking');
var all = document.getElementById('all');
var fantacy = document.getElementById('fantacy');
var history = document.getElementById('history-type');
var other = document.getElementById('other');
var content = '';
var books = JSON.parse(localStorage.getItem('arrivals'));
// var mybooks = JSON.parse(localStorage.getItem('new-arrivals'));

var arrivalsContainer = document.getElementById('arrivals')

//function to display the arrivals 
function display(books) {
    for (i = 0; i < books.length; i++) {
      
        content += `
  <div class="card">
   <div class="img-icons">
  <img src=${books[i]?.img} class="img-card card-img-top" alt="..."/>
  <div class="icons-container">
  <i class="fa-solid fa-link"></i>
  <i class="fa-solid fa-heart"></i>
  <i class="fa-solid fa-magnifying-glass"></i>
  </div>
  <div class="middle">
  
  </div>
  </div>
        <div class="card-body">
          <h5 class="author">${books[i]?.author}</h5>
          <h4 class="card-title">${books[i]?.title}</h4>
          <div class="prices">
          <p class="price">${books[i]?.price || ''}$ </p>
          <del>${`${books[i]?.oldPrice} ${books[i]?.oldPrice?'$' : ''}`  }</del>
          </div>
       </div>


  
 
</div>
  
  `
    }
    arrivalsContainer.innerHTML = content;
}

display(books);




//function that filters the cooking books 
cook.onclick = function filterCook() {
    var cookingBooks = books.filter((item) => {
        return item.type === 'cooking'
    })

    arrivalsContainer.innerHTML = '';

    content = ``;
    display(cookingBooks);
}


//function that shows all books 
all.onclick = function showAll() {
    arrivalsContainer.innerHTML = '';
    content = ``;
    display(books);
}



//function that shows fantacy books 
fantacy.onclick = function showAll() {
    var fantacyBooks = books.filter((item) => {
        return item.type === 'fantacy'
    })

    arrivalsContainer.innerHTML = '';
    content = ``;
    display(fantacyBooks);
}