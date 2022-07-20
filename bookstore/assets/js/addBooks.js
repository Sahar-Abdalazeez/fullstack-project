const price = document.getElementById('price');
const title = document.getElementById('title');
const author = document.getElementById('author-name');
const description = document.getElementById('description');
const priceBeforeDiscount = document.getElementById('price-before');
const bookType = document.getElementById('book-type');
const superCategory = document.getElementById('super-category');
let Add = document.getElementById('add');
var mybooks = JSON.parse(localStorage.getItem('arrivals'));

var titleCheck = false;
var priceCheck = false;
var AuthorCheck = false;
let recentImg;
let content = '';
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
    
}

function addNewBook() {
    arrivalObjcet = {
        category: bookType.value,
        arrivalsImg: recentImg,
        Author: author.value,
        Title: title.value,
        Price: price.value,
        OldPrice: priceBeforeDiscount.value
    }
    arrivalsArray = JSON.parse(localStorage.getItem('arrivalsArray'));
    arrivalsArray.push(arrivalObjcet);
    localStorage.setItem("arrivalsArray",JSON.stringify(arrivalsArray));
}



//add the book to home page 
Add.addEventListener('click', function () {
    addNewBook();
    clear();
    Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Your Book add successfully',
        showConfirmButton: false,
        timer: 1500
    })
})

function disabledOrNot() {
    if (titleCheck && priceCheck && AuthorCheck ) {
        Add.removeAttribute("disabled");

    } else {
        Add.setAttribute("disabled", "true");
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
