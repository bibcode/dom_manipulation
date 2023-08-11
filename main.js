const books = [

    {
        id: 1,
        name: "Wonder",
        category: "fiction",
        image: "IMG/Screenshot 2023-07-27 163136.png"
    },

    {
        id: 2,
        name: "Who moved my cheese",
        category: "fiction",
        image: "IMG/Screenshot 2023-07-27 163317.png"
    },
    {
        id: 3,
        name: "Sooley",
        category: "novels",
        image: "IMG/Screenshot 2023-07-27 163432.png"
    },
    {
        id: 4,
        name: "My Wonder",
        category: "adventure",
        image: "IMG/Screenshot 2023-07-27 163136.png"
    },
    {
        id: 5,
        name: "My brilliant freind",
        category: "novels",
        image: "IMG/Screenshot 2023-07-27 163336.png"
    },
    {
        id: 6,
        name: "Sparring Partners",
        category: "adventure",
        image: "IMG/Screenshot 2023-07-27 163406.png"
    }
]





// IMG / Screenshot 2023-07 - 27 163406.png


// let body = document.getElementsByTagName("body")[0]
// body.innerHTML = " <h1>hello there</h1>"
let demo = document.getElementById("demo")


let bookElement = books.map((book) => {
    let img = document.createElement("img");

    let div =
        `<div>
         <p>${book.id}</p>
         <img src="${book.image}">
        <p>${book.name}</p>
         <button id="btn">Add to cart</button> 
        </div>`
    demo.innerHTML += div
})

function fiction() {
    const myFiction = books.filter((book) => {
        return book.category.includes("fiction")
    })
    console.log(myFiction);
}
// function novels() {
//     const myNovels = books.filter((book) => {
//         return book.category.includes("novels")
//     })
//     return myNovels
// }
// function adventure() {
//     const myAdventure = books.filter((book) => {
//         return book.category.includes("adventure")
//     })
//     return myAdventure

// }