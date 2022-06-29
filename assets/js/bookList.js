var listContainer = document.getElementById('main-list-container');
var updateContainer = document.getElementById('update-container');
var booksItems = JSON.parse(localStorage.getItem('arrivals'));
var productNumber = document.getElementById('product-num');
var outerUpdate = document.getElementById('outer-update-container');
//update data fields 
var updateTitle = document.getElementById('title');
var updateDescription = document.getElementById('description');
var updatePrice = document.getElementById('price');
var updatePriceBefore = document.getElementById('price-before');
var updateAuthorName = document.getElementById('author-name');
var updateType = document.getElementById('book-type');
var updateBtn = document.getElementById('update-btn');
var updatedImg = document.getElementById('img-added');
var ContainerTitle = document.getElementById('title-btn');



listNumber = booksItems.length;
productNumber.innerHTML = `&nbsp${listNumber}&nbsp`;


//function to get data from inputs 
function getData() {
    var bookPrice = updatePrice.value;
    var booktTitle = updateTitle.value;
    var bookDesc = updateDescription.value || '';
    var oldPrice = updatePriceBefore.value;
    var authorName = updateAuthorName.value;
    var type = updateType.value;
    // var superType = superCategory.value;
    var img = localStorage.getItem('recent-img');
    return { price: bookPrice, title: booktTitle, desc: bookDesc, oldPrice: oldPrice, author: authorName, img: img, type: type };
}



//function to show list 
var content = ``;

function showlist() {
    for (i = 0; i < booksItems.length; i++) {

        content += `
      <div class="row">     
      <div class="list-img-container">
        <img class='book-photo' src="${booksItems[i]?.img}"/>
        </div>
        <div class="title">${booksItems[i]?.title} </div>
       <div class="price">${booksItems[i]?.price} </div>
       <div class="author">${booksItems[i]?.author} </div>
       <div class="btns-container">
       <button id="delete" onclick={deleteBook(${i})} ><i class="fa-solid fa-trash-can "></i>Delete</button>
       <button id="edit" onclick={edit(${i})} ><i class="fa-solid fa-pencil"></i>Edit</button>
       </div>
     </div>`;
    }


    listContainer.innerHTML = `${content}`;
}

showlist();





//function to delete item
function deleteBook(index) {
    booksItems.splice(index, 1);
    localStorage.setItem('arrivals', JSON.stringify(booksItems));
    window.location.reload();
}





//function to update item 
var itemIndex;

function edit(index) {
    itemIndex = index;
    var book = booksItems[index];
    outerUpdate.style.display = "block"
    listContainer.style.display = "none"
    ContainerTitle.style.display = "none"
    updateTitle.value = book.title;
    // updateDescription.value = book.description;
    updatePriceBefore.value = book.oldPrice || 0;
    updatePrice.value = book.price;
    updateAuthorName.value = book.author;
}



//add the book to local storage 
updateBtn.onclick = function updateItem() {
    let book = getData();
    console.log('update book', book);
    var arrivals = JSON.parse(localStorage.getItem('arrivals')) || [];
    arrivals.splice(itemIndex, 1, book);
    localStorage.setItem("arrivals", JSON.stringify(arrivals));
    outerUpdate.style.display = "none"
    listContainer.style.display = "block"
    ContainerTitle.style.display = "block"
    location.reload();
}




//function to add image 
//to get the files chosen 
document.querySelector("#add-file").addEventListener('change', function() {
    //to cconver the file into data url ->> url that contains the information about the real file 
    const reader = new FileReader(this.files[0]);
    //event listener on load 
    reader.addEventListener("load", () => {
        localStorage.setItem("recent-img", reader.result);
        // location.reload();

    });
    reader.readAsDataURL(this.files[0])
});

document.addEventListener("DOMContentLoaded", () => {
    const recentImgDataUrl = localStorage.getItem('recent-img');
    if (recentImgDataUrl) {
        document.querySelector("#img-added").setAttribute("src", recentImgDataUrl)
    }
})