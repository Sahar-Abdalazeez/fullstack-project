const price = document.getElementById('price');
const title = document.getElementById('title');
const author = document.getElementById('author-name');
const description = document.getElementById('description');
const priceBeforeDiscount = document.getElementById('price-before');
const bookType = document.getElementById('book-type');
const superCategory = document.getElementById('super-category');
const Add = document.getElementById('add');
var mybooks = JSON.parse(localStorage.getItem('arrivals'));

var titleCheck = false;
var priceCheck = false;
var priceBeforeCheck = false;
var AuthorCheck = false;


if (localStorage.getItem('arrivals') == null) {
    localStorage.setItem('arrivals', "[]");
}


console.log(error)

//function to get data from inputs 
function getData() {
    var bookPrice = price.value;
    var booktTitle = title.value;
    var bookDesc = description.value;
    var oldPrice = priceBeforeDiscount.value;
    var authorName = author.value;
    var type = bookType.value;
    var superType = superCategory.value;
    var img = localStorage.getItem('recent-img');
    return { price: bookPrice, title: booktTitle, desc: bookDesc, oldPrice: oldPrice, author: authorName, img: img, type: type, superType: superType };

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
        //  location.reload()
    }
})

//function to clear data inputs 
function clear() {
    price.value = '';
    title.value = '';
    description.value = '';
    priceBeforeDiscount.value = ''
    author.value = '';
    superCategory.value = '';
    bookType.value = '';
    document.querySelector("#add-file").value = '';
    author.classList.remove('is-valid');
    title.classList.remove('is-valid');
    price.classList.remove('is-valid');
    priceBeforeDiscount.classList.remove('is-valid');
}


//add the book to local storage 
Add.onclick = function addBook() {
    let book = getData();
    var arrivals = JSON.parse(localStorage.getItem('arrivals'));
    arrivals.push(book);
    localStorage.setItem("arrivals", JSON.stringify(arrivals));
    clear();
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
}




function disabledOrNot() {
    if (titleCheck && priceCheck && AuthorCheck && priceBeforeCheck) {
        Add.removeAttribute("disabled");

    } else {
        Add.setAttribute("disabled", "true");
    }
}

title.onkeyup = function () {
    var namePattern = /^[a-zA-Z].*[\s\.]*$/g;
    if (namePattern.test(title.value)) {
        titleCheck = true;
        disabledOrNot();
        title.classList.add('is-valid');
        title.classList.remove('is-invalid');
        nameAlert.classList.add('d-none');
    } else {
        titleCheck = false;
        disabledOrNot();
        title.classList.add('is-invalid');
        title.classList.remove('is-valid');
        nameAlert.classList.remove('d-none');

    }
}



author.onkeyup = function () {
    var namePattern = /^[A-Z][a-z]{2,7}$/;
    if (namePattern.test(author.value)) {
        AuthorCheck = true;
        disabledOrNot();
        author.classList.add('is-valid');
        author.classList.remove('is-invalid');

    } else {
        AuthorCheck = false;
        disabledOrNot();
        author.classList.add('is-invalid');
        author.classList.remove('is-valid');


    }
}



price.onkeyup = function () {
    var namePattern = /\d{1,3}(?:[.,]\d{3})*(?:[.,]\d{2})?/;
    if (namePattern.test(price.value)) {
        priceCheck = true;
        disabledOrNot();
        price.classList.add('is-valid');
        price.classList.remove('is-invalid');
        nameAlert.classList.add('d-none');
    } else {
        priceCheck = false;
        disabledOrNot();
        price.classList.add('is-invalid');
        price.classList.remove('is-valid');
        nameAlert.classList.remove('d-none');

    }
}

priceBeforeDiscount.onkeyup = function () {
    var namePattern = /\d{1,3}(?:[.,]\d{3})*(?:[.,]\d{2})?/;
    if (namePattern.test(priceBeforeDiscount.value)) {
        priceBeforeCheck = true;
        disabledOrNot();
        priceBeforeDiscount.classList.add('is-valid');
        priceBeforeDiscount.classList.remove('is-invalid');
        nameAlert.classList.add('d-none');
    } else {
        priceBeforeCheck = false;
        disabledOrNot();
        priceBeforeDiscount.classList.add('is-invalid');
        priceBeforeDiscount.classList.remove('is-valid');
        nameAlert.classList.remove('d-none');

    }
}