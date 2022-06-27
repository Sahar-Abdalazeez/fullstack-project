const price = document.getElementById('price');
const title = document.getElementById('title');
const author = document.getElementById('author-name');
const description = document.getElementById('description');
const priceBeforeDiscount = document.getElementById('price-before');
const bookType = document.getElementById('book-type');
const superCategory = document.getElementById('super-category');
const Add = document.getElementById('add');

var mybooks = JSON.parse(localStorage.getItem('arrivals'));


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



//function to clear data inputs 
function clear() {
    price.value = '';
    title.value = '';
    description.value = '';
    priceBeforeDiscount.value = ''
    authorName.value = '';
    superType.value = '';
    bookType.value = '';
}


//add the book to local storage 
Add.onclick = function addBook() {
    let book = getData();
    var arrivals = JSON.parse(localStorage.getItem('arrivals'));
    arrivals.push(book);
    localStorage.setItem("arrivals", JSON.stringify(arrivals));
    clear() 
 }