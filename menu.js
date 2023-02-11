// menu array with different menu items

const menu = [
    {
        id: 1,
        title: "RIGATONCINI",
        category: "dinner",
        desc: "braised lamb shank, chard, mint, parsley, pecorino",
        price: 26,
        image: "./Images/rigatoncini.jpg",
    }, 
    {
        id: 2,
        title: "CANNELLONI",
        category: "dinner",
        desc: "chanterelle, bloomsdale spinach, ricotta, bechamel, sage",
        price: 26,
        image: "./Images/canneloni.jpg",
    }, 
    {
        id: 3,
        title: "SPAGHETTINI ALLA PESCATORA",
        category: "dinner",
        desc: "manila clams, rock cod, san marzano tomato, capers, oregano",
        price: 24,
        image: "./Images/pescatora.jpg",
    }, 
    {
        id: 4,
        title: "INVOLTINI DI SPADA",
        category: "dinner",
        desc: "swordfish, currant, pine nut, browned butter, pangrattato, lemon",
        price: 32,
        image: "./Images/dispada.jpg",
    }, 
    {
        id: 5,
        title: "BRASATO",
        category: "dinner",
        desc: "braised lamb shank, chard, mint, parsley, pecorino",
        price: 38,
        image: "./Images/brasato.jpg",
    }, 
    {
        id: 6,
        title: "BUDINO",
        category: "dessert",
        desc: "guittard 66% chocolate, candied hazelnuts, whipped cream, sea salt, olive oil",
        price: 12,
        image: "./Images/budino.jpg",
    }, 
    {
        id: 7,
        title: "MASCARPONE CHEESECAKE",
        category: "dessert",
        desc: "huckleberry compote, almond, orange florentine",
        price: 10,
        image: "./Images/mascarpone.jpg",
    }, 
    {
        id: 8,
        title: "POMODORO EGGS",
        category: "lunch",
        desc: "san marzano tomato, two baked eggs, pancetta, grilled crostini",
        price: 18,
        image: "./Images/pomodoro.jpg",
    }, 

    {
        id: 9,
        title: "SPAGHETTI CARBONARA",
        category: "lunch",
        desc: "pancetta, egg yolk, black pepper, pecorino",
        price: 18,
        image: "./Images/carbonara.jpg",
    }, 

    {
        id: 10,
        title: "BURRATA CROSTINI",
        category: "lunch",
        desc: "sogno toscano burrata, fuyu persimmon, spiced & candied pecans",
        price: 16,
        image: "./Images/crostini.jpg",
    }, 
    {
        id: 11,
        title: "CHICORY ALLA ROMANA",
        category: "lunch",
        desc: "anchovy, soft boiled egg, parmigiano-reggiano, pangrattato",
        price: 18,
        image: "./Images/chicory.jpg",
    }, 
    {
        id: 12,
        title: "A BLACK TIE AFFAIR",
        category: "drinks",
        desc: "cynar, rum blend, maraschino, grapefruit, lime",
        price: 13,
        image: "./Images/black.jpg",
    }, 
    {
        id: 13,
        title: "SPREZZATURA",
        category: "drinks",
        desc: "vodka, peach, pineapple, lemon, mint, sparkling moscato",
        price: 14,
        image: "./Images/spezzatura.jpg",
    }, 
    

];

// section, here we will append menu-items
const section = document.querySelector(".menu-items");


// Function for displaying menu items
const displayMenuItems = (menuItems) => {
    /* using map iterator to create a new array which returns html according
    to each item in the menu array */
    let displayMenu = menuItems.map((item) => {
        return ` <div class="menu-item">
        <img src=${item.image} class="image" alt="${item.title}">
        <div class="container-item">
            <div class="panel-item">
                <h2>${item.title}</h2>
            </div>
            <div class="desc">${item.desc}</div>
            <div class="prize">$${item.price}</div>
        </div>
    </div>`
    });
    // converting the array to a string with the join method
    displayMenu = displayMenu.join("");
    section.innerHTML = displayMenu;
}

// function for what to run when the Dom is loaded
window.addEventListener("DOMContentLoaded", () => {
    displayMenuItems(menu);
    // using reduce to create an array with the food categories, initial value = ["all"]
    const categories = menu.reduce((values, item) => {
        if(!values.includes((item.category))) {
            values.push(item.category);
        } return values;
    }, ["all"]) 
    // creating the buttons as a new array with the map method and the converting it to a string. 
    const categoryBtns = categories.map((category) => {
        return `<button class="btn" data-id="${category}">${category}</button>`
    }).join("");

    let panel_btns = document.querySelector(".panel-buttons");
    panel_btns.innerHTML = categoryBtns;
    // appending the html in categoryBtns to the panel
    let buttons = document.querySelectorAll(".btn");
    // creating and iterating over btns with forEach method
    buttons.forEach(btn => {
        // Adding event listener to each button when clicking
        btn.addEventListener("click", (e) => {
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter((item) => {
                if(item.category === category) {
                    return item;
                }
            })
            console.log(menuCategory)
            // code for which items should be visible
            if(btn.innerHTML == "all") {
                displayMenuItems(menu);
            } else {
                displayMenuItems(menuCategory)
            }
        })
    })
})

