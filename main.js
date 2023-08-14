const books = [
    {
        id: 1,
        name: "Wonder",
        category: "Fiction",
        price:"$60.99",
        image: "IMG/Screenshot 2023-07-27 163136.png"
    },

    {
        id: 2,
        name: "Who moved my cheese",
        category: "Fiction",
        price:"$99.99",
        image: "IMG/Screenshot 2023-07-27 163317.png"
    },
    {
        id: 3,
        name: "Sooley",
        category: "Novels",
        price:"$70.99",
        image: "IMG/Screenshot 2023-07-27 163432.png"
    },
    {
        id: 4,
        name: "My Wonder",
        category: "Adventure",
        price:"$30.99",
        image: "IMG/Screenshot 2023-07-27 163136.png"
    },
    {
        id: 5,
        name: "My brilliant freind",
        category: "Novels",
        price:"$40.99",
        image: "IMG/Screenshot 2023-07-27 163336.png"
    },
    {
        id: 6,
        name: "Sparring Partners",
        category: "Adventure",
        price:"$80.99",
        image: "IMG/Screenshot 2023-07-27 163406.png"
    }
]

function handleFilter(event) {
    console.log("event>>", event.target.textContent);
    document.getElementById("demo").innerHTML = "";
    const filterdBooks = books.filter((book) => {
        return book.category.includes(event.target.textContent)
    })
    console.log(filterdBooks);
    let bookContent = filterdBooks.map((book) => {
        let div =
            `<div>
          <p>${book.id}</p>
             <img src="${book.image}">
            <p>${book.name}</p>
             <button id="btn">Add to cart</button> 
            </div>`
        document.getElementById("demo").innerHTML += div;
    })
}

function bookPrice() {
    document.getElementById("demo").innerHTML ="";
    const priceFilter =books.filter((book)=>{
        return book.price < 60.99;
    })
    console.log(priceFilter);
    let bookContent = priceFilter.map((book) => {
        let div =
            `<div>
          <p>${book.id}</p>
             <img src="${book.image}">
            <p>${book.name}</p>
             <button id="btn">Add to cart</button> 
            </div>`
        document.getElementById("demo").innerHTML += div;
    })
}







let bookElement = books.map((book) => {

    let div =
        `<div>
             <p>${book.id}</p>
             <img src="${book.image}">
            <p>${book.name}</p>
            <p>${book.price}</p>
             <button id="btn">Add to cart</button> 
            </div>`
    document.getElementById("demo").innerHTML += div

})