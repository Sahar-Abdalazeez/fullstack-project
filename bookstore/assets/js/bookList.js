const price = document.getElementById('price');
const title = document.getElementById('title');
const author = document.getElementById('author-name');
const description = document.getElementById('description');
const priceBeforeDiscount = document.getElementById('price-before');
const bookType = document.getElementById('book-type');
const superCategory = document.getElementById('super-category');
let recentImg;

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
let listIndex;

var titleCheck = false;
var priceCheck = false;

var AuthorCheck = false;
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
    for (i = 0; i < arrivalsArray.length; i++) {

        content += `
      <div class="row">     
      <div class="list-img-container">
        <img class='book-photo' src="${arrivalsArray[i].arrivalsImg}"/>
        </div>
        <div class="title">${arrivalsArray[i].Title} </div>
       <div class="price">${arrivalsArray[i].Price} </div>
       <div class="author">${arrivalsArray[i].Author} </div>
       <div class="btns-container">
       <button id="delete" onclick={deleteBook(${i})} ><i class="fa-solid fa-trash-can "></i>Delete</button>
       <button id="edit" onclick={edit(${i})} ><i class="fa-solid fa-pencil"></i>Edit</button>
       </div>
     </div>`;
    }


    listContainer.innerHTML = `${content}`;
}

// showlist();

if(localStorage.getItem('arrivalsArray')==null){
    localStorage.setItem('arrivalsArray', JSON.stringify(arrivalsArray));
    showlist();
}else{
    arrivalsArray = JSON.parse(localStorage.getItem('arrivalsArray'));
    showlist();
}


productNumber.innerHTML = `&nbsp${arrivalsArray.length}&nbsp`;

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



            arrivalsArray.splice(index, 1);
            listIndex = index;
            localStorage.setItem("arrivalsArray",JSON.stringify(arrivalsArray));
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
    outerUpdate.style.display = "block"
    listContainer.style.display = "none"
    ContainerTitle.style.display = "none"
    updateTitle.value = arrivalsArray[itemIndex].Title;
    // updateDescription.value = book.description;
    updatePriceBefore.value = arrivalsArray[itemIndex].OldPrice || 0;
    updatePrice.value = arrivalsArray[itemIndex].Price;
    updateAuthorName.value = arrivalsArray[itemIndex].Author;
    updateDescription.value = "";
    titleCheck= true;
    priceCheck = true;
    AuthorCheck= true;
    disabledOrNot();
}



//add the updated book to the books' list
updateBtn.onclick = function updateItem() {
    if(recentImg==undefined){
        arrivalsArray[itemIndex].category = bookType.value;
        arrivalsArray[itemIndex].Author = author.value;
        arrivalsArray[itemIndex].Title = title.value;
        arrivalsArray[itemIndex].Price = price.value;
        arrivalsArray[itemIndex].OldPrice = priceBeforeDiscount.value;
        localStorage.setItem('arrivalsArray', JSON.stringify(arrivalsArray));
        Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Your Book add successfully',
            showConfirmButton: false,
            timer: 1500
        }).then(() => {
            window.location.reload();
        })
    }else{
        arrivalsArray[itemIndex].category = bookType.value;
        arrivalsArray[itemIndex].arrivalsImg=recentImg;
        arrivalsArray[itemIndex].Author = author.value;
        arrivalsArray[itemIndex].Title = title.value;
        arrivalsArray[itemIndex].Price = price.value;
        arrivalsArray[itemIndex].OldPrice = priceBeforeDiscount.value;
        localStorage.setItem("arrivalsArray",JSON.stringify(arrivalsArray));
        Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Your Book add successfully',
            showConfirmButton: false,
            timer: 1500
        }).then(() => {
            window.location.reload();
        })  
    }

}




//function to add image 
//to get the files chosen 
document.querySelector("#add-file").addEventListener('change', function () {
    //to cconver the file into data url ->> url that contains the information about the real file 
    const reader = new FileReader(this.files[0]);
    //event listener on load 
    reader.addEventListener("load", () => {
        recentImg = reader.result;
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


function disabledOrNot() {
    if (titleCheck && priceCheck && AuthorCheck ) {
        updateBtn.removeAttribute("disabled");

    } else {
        updateBtn.setAttribute("disabled", "true");
    }
}