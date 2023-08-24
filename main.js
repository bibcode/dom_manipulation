const books = [
    {
        id: 1,
        name: "Wonder",
        category: "Fiction",
        price: "60.99",
        image: "IMG/Screenshot 2023-07-27 163136.png"
    },

    {
        id: 2,
        name: "Who moved my cheese",
        category: "Fiction",
        price: "99.99",
        image: "IMG/Screenshot 2023-07-27 163317.png"
    },
    {
        id: 3,
        name: "Sooley",
        category: "Novels",
        price: "70.99",
        image: "IMG/Screenshot 2023-07-27 163432.png"
    },
    {
        id: 4,
        name: "My Wonder",
        category: "Adventure",
        price: "30.99",
        image: "IMG/Screenshot 2023-07-27 163136.png"
    },
    {
        id: 5,
        name: "My brilliant freind",
        category: "Novels",
        price: "40.99",
        image: "IMG/Screenshot 2023-07-27 163336.png"
    },
    {
        id: 6,
        name: "Sparring Partners",
        category: "Adventure",
        price: "80.99",
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
          <p id="book_id">${book.id}</p>
             <img src="${book.image}">
            <p>${book.name}</p>
             <button id="btn" onclick="setLocalStorage(${book.id})">Add to cart</button> 
            </div>`
        document.getElementById("demo").innerHTML += div;
    })
}

function bookPrice() {
    let value = document.getElementById("input_search").value

    document.getElementById("demo").innerHTML = "";
    const priceFilter = books.filter((book) => {
        return book.price < value;
    })
    console.log(priceFilter);
    let bookContent = priceFilter.map((book) => {
        let div =
            `<div>
          <p id="book_id">${book.id}</p>
             <img src="${book.image}">
            <p>${book.name}</p>
            <p>${book.price}</p>
            
             <button id="btn"onclick="setLocalStorage(${book.id})" >Add to cart</button> 
            </div>`
        document.getElementById("demo").innerHTML += div;
    })
}

function setLocalStorage(id) {
    const bookList = books.filter((book) => {
        return book.id == id;
    })
    if (bookList.length > 0) {
        const returnedBook = bookList[0];
        if (returnedBook) {
            const booksJson = localStorage.getItem("book") || "[]";
            let booksArray = JSON.parse(booksJson)
            booksArray = [...booksArray, returnedBook]
            localStorage.setItem("book", JSON.stringify(booksArray));
        } 
    } else {
        console.log("no localstorage found on this device");

    }
}
window.addEventListener("load", getLocalStorage)
function getLocalStorage() {
    let orderedBook = JSON.parse(localStorage.getItem("book"));
    document.getElementById("demos").innerHTML = "";
    let bookElements = orderedBook.map((book) => {
        return `
            <div>
            <p id="book_id">${book.id}</p>
                    <img src="${book.image}">
                    <p>${book.name}</p>
                    <p>${book.price}</p>
                    </div>
            `;
    });
    for (let i = 0; i < bookElements.length; i++) {
        document.getElementById("demos").innerHTML += bookElements[i];
    }
}

function reset() {
    document.getElementById("name").value = "";
    document.getElementById("phoNumber").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";

}

function submit() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let userType = document.getElementById("userType").value;
    console.log("email>>", email);
    console.log("password>>", password);
    console.log("userType>>", userType);
}

function register() {
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phoNmuber = document.getElementById("phoNumber").value
    let password = document.getElementById("password").value
    console.log("name>", name);
    console.log("email>", email);
    console.log("phoNumber>", phoNmuber);
    console.log("password>", password);

}





let bookElement = books.map((book) => {

    return div =
        `<div>
             <p id="book_id">${book.id}</p>
             <img src="${book.image}">
            <p>${book.name}</p>
            <p>${book.price}</p>
             <button id="btn" onclick="setLocalStorage(${book.id})">Add to cart</button>
            </div>`
})
for (let i = 0; i < bookElement.length; i++) {
    document.getElementById("demo").innerHTML += bookElement[i];

}