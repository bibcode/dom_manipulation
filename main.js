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
document.getElementById("demo")
function fiction() {
    const myFiction = books.filter((book) => {
        return book.category.includes("fiction")
    })
    demo.innerHTML = myFiction;

}
document.getElementById("demo")
function adventure() {
    const myAdventure = books.filter((book) => {
        return book.category.includes("adventure")
    })
    demo.innerHTML = myAdventure;

}
document.getElementById("demo")
function novels() {
    const myNovels = books.filter((book) => {
        return book.category.includes("fiction")
    })
    demo.innerHTML = myNovels;

}


let demo = document.getElementById("demo")

let bookElement = books.map((book) => {

    let div =
        `<div>
             <p>${book.id}</p>
             <img src="${book.image}">
            <p>${book.name}</p>
             <button id="btn">Add to cart</button> 
            </div>`
    demo.innerHTML += div

})




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