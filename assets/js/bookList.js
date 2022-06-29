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

var titleCheck = false;
var priceCheck = false;
var priceBeforeCheck = false;
var AuthorCheck = false;

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
        <div class="title">Titel : ${booksItems[i]?.title} </div>
       <div class="price">Price:${booksItems[i]?.price} </div>
       <div class="author">Author :${booksItems[i]?.author} </div>
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

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: true
    })

    swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {



            booksItems.splice(index, 1);
            localStorage.setItem('arrivals', JSON.stringify(booksItems));
            window.location.reload();

            swalWithBootstrapButtons.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
                'Cancelled',
                'Your imaginary file is safe :)',
                'error'
            )
        }
    })


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
    updateDescription.value=book.desc;
    titleCheck= true;
    priceCheck = true;
    priceBeforeCheck= true;
    AuthorCheck= true;
    disabledOrNot();
}



//add the book to local storage 
updateBtn.onclick = function updateItem() {
    let book = getData();
    console.log('update book', book);
    var arrivals = JSON.parse(localStorage.getItem('arrivals')) || [];
    arrivals.splice(itemIndex, 1, book);
    localStorage.setItem("arrivals", JSON.stringify(arrivals));
    titleCheck = false;
    priceCheck = false;
    priceBeforeCheck = false;
    AuthorCheck = false;
    disabledOrNot();
    Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Your Book add successfully',
        showConfirmButton: false,
        timer: 1500
    })
    outerUpdate.style.display = "none"
    listContainer.style.display = "block"
    ContainerTitle.style.display = "block"
    location.reload();
    
}




//function to add image 
//to get the files chosen 
document.querySelector("#add-file").addEventListener('change', function () {
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


function disabledOrNot() {
    if (titleCheck && priceCheck && AuthorCheck && priceBeforeCheck) {
        Add.removeAttribute("disabled");

    } else {
        Add.setAttribute("disabled", "true");
    }
}

updateTitle.onkeyup = function () {
    var namePattern = /^[a-zA-Z].*[\s\.]*$/g;
    if (namePattern.test(updateTitle.value)) {
        titleCheck = true;
        disabledOrNot();
        updateTitle.classList.add('is-valid');
        updateTitle.classList.remove('is-invalid');
        nameAlert.classList.add('d-none');
    } else {
        titleCheck = false;
        disabledOrNot();
        updateTitle.classList.add('is-invalid');
        updateTitle.classList.remove('is-valid');
        nameAlert.classList.remove('d-none');

    }
}



updateAuthorName.onkeyup = function () {
    var namePattern = /^[A-Z][a-z]{2,7}$/;
    if (namePattern.test(updateAuthorName.value)) {
        AuthorCheck = true;
        disabledOrNot();
        updateAuthorName.classList.add('is-valid');
        updateAuthorName.classList.remove('is-invalid');

    } else {
        AuthorCheck = false;
        disabledOrNot();
        updateAuthorName.classList.add('is-invalid');
        updateAuthorName.classList.remove('is-valid');


    }
}



updatePrice.onkeyup = function () {
    var namePattern = /\d{1,3}(?:[.,]\d{3})*(?:[.,]\d{2})?/;
    if (namePattern.test(updatePrice.value)) {
        priceCheck = true;
        disabledOrNot();
        updatePrice.classList.add('is-valid');
        updatePrice.classList.remove('is-invalid');
        nameAlert.classList.add('d-none');
    } else {
        priceCheck = false;
        disabledOrNot();
        updatePrice.classList.add('is-invalid');
        updatePrice.classList.remove('is-valid');
        nameAlert.classList.remove('d-none');

    }
}

updatePriceBefore.onkeyup = function () {
    var namePattern = /\d{1,3}(?:[.,]\d{3})*(?:[.,]\d{2})?/;
    if (namePattern.test(updatePriceBefore.value)) {
        priceBeforeCheck = true;
        disabledOrNot();
        updatePriceBefore.classList.add('is-valid');
        updatePriceBefore.classList.remove('is-invalid');
        nameAlert.classList.add('d-none');
    } else {
        priceBeforeCheck = false;
        disabledOrNot();
        updatePriceBefore.classList.add('is-invalid');
        updatePriceBefore.classList.remove('is-valid');
        nameAlert.classList.remove('d-none');

    }
}

function disabledOrNot() {
    if (titleCheck && priceCheck && AuthorCheck && priceBeforeCheck) {
        updateBtn.removeAttribute("disabled");

    } else {
        updateBtn.setAttribute("disabled", "true");
    }
}