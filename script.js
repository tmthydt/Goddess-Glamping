"use strict";

//this function closes all of the checkout page popups
function closeModals(event) {
  if (event.target.classList.contains("closeModal")) {
    let modal1 = document.querySelector(".cart__modal");
    modal1.style.display = "none";
    let modal2 = document.querySelector(".cart__container");
    modal2.style.display = "none";
    let modal3 = document.querySelector(".checkout-page");
    modal3.style.display = "none";
    let modal4 = document.querySelector(".receipt-page");
    modal4.style.display = "none";
  }
}

//this is the query selector that selects the main element and adds an event listener that runs the closeModals function when clicked
document.querySelector("main").addEventListener("click", closeModals);

//this is the query selector that selects the entire container for all of the categories, and adds an event  listener that toggles the hidden class when an element with the class container__title is clicked
document.querySelector(".item__container").addEventListener("click", function (event) {
  if (event.target.classList.contains("container__title")) {
    event.target.nextElementSibling.classList.toggle("hidden");
  }
});

//this is the query selector that selects the shopping cart icon and adds an event listener that runs the showCart function when clicked
document.querySelector(".material-icons").addEventListener("click", showCart);

//this is the function that shows the cart popup, fades out the background, and hides the list of each of the categories
function showCart() {
  document.querySelector(".cart__modal").style.display = "block";
  document.querySelector(".cart__container").style.display = "block";
  document.querySelector(".live__list").classList.add("hidden");
  document.querySelector(".laugh__list").classList.add("hidden");
  document.querySelector(".lounge__list").classList.add("hidden");
}

//this query selector selects the "checkout" button on the cart popup, and adds an event listener that will run the showCheckout function when clicked
document.querySelector(".checkout-button").addEventListener("click", showCheckout);

//this function shows the checkout popup, hides the previous cart popup, and adds content to the popup that shows the total price
function showCheckout() {
  document.querySelector(".checkout-page").style.display = "block";
  document.querySelector(".cart__container").style.display = "none";
  document.querySelector("p.priceOfCart").innerHTML = `Your total is $${total.toFixed(2)}`;
}

//this query selector selects the "submit" button on the checkout popup, and adds an event listener that will run the showReceipt function when clicked
document.querySelector(".checkout-submit").addEventListener("click", showReceipt);

//this function shows the receipt popup, hides the previous checkout popup, and adds content to the popup that shows all of the items purchased, the subtotal, and the total price. If the user pays more cash than the cost of the purchase, this function also adds content that says how much is owed to the user
function showReceipt() {
  document.querySelector(".receipt-page").style.display = "block";
  document.querySelector(".checkout-page").style.display = "none";
  let cashAmount = document.querySelector(".cashAmount").value;
  if (cashAmount > total) {
    document.querySelector("p.owedCash").innerHTML = `We owe you $${(cashAmount - total).toFixed(2)}`;
  }
  let itemsPurchased = document.querySelector(".userReceipt");
  for (let i = 0; i < shoppingCart.length; i++) {
    let newItemPurchase = document.createElement("p");
    itemsPurchased.appendChild(newItemPurchase);
    newItemPurchase.innerHTML = `
    <p class="newItemPurchase">${shoppingCart[i].name}: $${shoppingCart[i].price}</p>
    `;
  }
  let purchaseTotal = document.createElement("p");
  itemsPurchased.appendChild(purchaseTotal);
  purchaseTotal.innerHTML = `
  <p class="subtotal">Subtotal: $${total.toFixed(2)}</p>
  <p>Total: $${(total += total * 0.06).toFixed(2)}</p>
  `;
}




//this declares three variables, setting the total to start at 0, setting the shoppingCart to an empty array, and setting the itemList to an array of 10 items, with their corresponding price values
let total = 0.;
let shoppingCart = [];
let itemList = [
  { name: "Armand de Brignac Champagne", price: 300 },
  { name: "Fiji Water", price: 20 },
  { name: "Espresso Machine", price: 400 },
  { name: "Personal Chef", price: 5000 },
  { name: "Smart Projector", price: 1200 },
  { name: "Charging Station", price: 350 },
  { name: "VR Headset & Drone", price: 500 },
  { name: "Spinning Bed", price: 1500 },
  { name: "Microfiber Robe", price: 150 },
  { name: "Tower Fan", price: 500 }
];

//this function declares a variable called addItem, which accepts a parameter of newItem, re-initializes shoppingCart to be equal to a copy of the shopping cart (using spread), and adds a copy of newItem to the end of the shoppingCart array
// const addItem = (newItem) => shoppingCart = [...shoppingCart, { ...newItem }];
function addItem(newItem) {
  shoppingCart = [...shoppingCart, { ...newItem }];
}

//this function declares a variable called removeItem, which accepts a parameter of itemName, declares a variable called index, which searches through the shopping cart to find the item name, and if it matches, removes it, and updates the total
const removeItem = itemName => {
  const index = shoppingCart.findIndex(item => item.name === itemName);
  shoppingCart = [...shoppingCart.slice(0, index), ...shoppingCart.slice(index + 1)];
  updateTotal();
}


//this function sets the total to 0, then to the sum of each item added up. The HTML formats/displays the subtotal, total and total w/tax separately in the cart__total element
const updateTotal = () => {
  total = 0;
  for (let item of shoppingCart) { total += item.price; }
  document.querySelector("p.cart__total").innerHTML = `
  <p>Subtotal: $${total.toFixed(2)}</p>
  <p>Tax: $${(total * 0.06).toFixed(2)}</p>
  <p>Total w/tax: $${(total += total * 0.06).toFixed(2)}</p>
  `;
}

//this declares a variable called main that is the selection of the main element in the DOM
const main = document.querySelector("main");

//we add a click event listener to the main element, which runs an anonymous function that does two things: (1) If the class of the target event contains "add__btn", it runs the addItem function, runs the display function, and runs the updateTotal function. (2) Otherwise, if the target event contains "remove__btn", it runs the removeItem function, removes the item from the target event's parentNode, and runs the updateTotal function
main.addEventListener("click", function (event) {
  if (event.target.classList.contains("add__btn")) {
    addItem(itemList[event.target.attributes[0].value]);
    display(itemList[event.target.attributes[0].value]);
    updateTotal();
  } else if (event.target.classList.contains("remove__btn")) {
    removeItem(event.target.attributes[0].value);
    event.target.parentNode.remove();
    updateTotal();
  }
});

//this function has a parameter of item, declares an variable that creates a new li element, changes the innerHTML, and appends the element to the selected cart__list item
function display(item) {
  const el = document.createElement("li");
  el.innerHTML = `
  <p>${item.name}</p>
  <p>Price: $${item.price}</p>
  <button name="${item.name}" class="remove__btn">Remove from cart</button>`;
  document.querySelector("ul.cart__list").append(el);
}

//this for loop goes through each item in the itemList, and if it matches, creates a new li element that is appended to the selected ul item, and changes the innerHTML of the element
for (let index in itemList) {
  if (itemList[index].name === "Armand de Brignac Champagne") {
    const itemUL = document.querySelector("ul.live__list");
    const el = document.createElement("li");
    el.innerHTML = `
    <img src="./icons/icon-champagne.jpg" class="itemImage">
    <p class="itemTitle">${itemList[index].name}</p>
    <p class="itemDescription">Intensely fruity, yet vinous and elegant on the palate. Powerful yet pure.</p>
    <p class="itemPrice">Price: $${itemList[index].price}</p>
    <button i="${index}" class="add__btn">Add to cart</button>
    `;
    itemUL.append(el);
  }
  else if (itemList[index].name === "Fiji Water") {
    const itemUL = document.querySelector("ul.live__list");
    const el = document.createElement("li");
    el.innerHTML = `
    <img src="./icons/icon-fiji.jpg" class="itemImage">
    <p class="itemTitle">${itemList[index].name}</p>
    <p class="itemDescription">As tropical rain falls on a pristine rain forest, Fiji Water is filtered through layers of volcanic rock, giving it a soft, smooth taste.</p>
    <p class="itemPrice">Price: $${itemList[index].price}</p>
    <button i="${index}" class="add__btn">Add to cart</button>
    `;
    itemUL.append(el);
  }
  else if (itemList[index].name === "Espresso Machine") {
    const itemUL = document.querySelector("ul.live__list");
    const el = document.createElement("li");
    el.innerHTML = `
    <img src="./icons/icon-espresso.jpg" class="itemImage">
    <p class="itemTitle">${itemList[index].name}</p>
    <p class="itemDescription">Coffeehouse experience in one touch. This semi-automatic machine extracts the espresso you’ve come to expect from your barista.</p>
    <p class="itemPrice">Price: $${itemList[index].price}</p>
    <button i="${index}" class="add__btn">Add to cart</button>
    `;
    itemUL.append(el);
  }
  else if (itemList[index].name === "Personal Chef") {
    const itemUL = document.querySelector("ul.live__list");
    const el = document.createElement("li");
    el.innerHTML = `
    <img src="./icons/icon-chef.jpg" class="itemImage">
    <p class="itemTitle">${itemList[index].name}</p>
    <p class="itemDescription">Internationally renowned, chef Gordon Ramsay has opened a string of successful restaurants across the globe.</p>
    <p class="itemPrice">Price: $${itemList[index].price}</p>
    <button i="${index}" class="add__btn">Add to cart</button>
    `;
    itemUL.append(el);
  }
  else if (itemList[index].name === "Smart Projector") {
    const itemUL = document.querySelector("ul.laugh__list");
    const el = document.createElement("li");
    el.innerHTML = `
    <img src="./icons/icon-projector.jpg" class="itemImage">
    <p class="itemTitle">${itemList[index].name}</p>
    <p class="itemDescription">Enjoy smart TV functionality on the big screen with this home theater projector.</p>
    <p class="itemPrice">Price: $${itemList[index].price}</p>
    <button i="${index}" class="add__btn">Add to cart</button>
    `;
    itemUL.append(el);
  }
  else if (itemList[index].name === "Charging Station") {
    const itemUL = document.querySelector("ul.laugh__list");
    const el = document.createElement("li");
    el.innerHTML = `
    <img src="./icons/icon-charging.png" class="itemImage">
    <p class="itemTitle">${itemList[index].name}</p>
    <p class="itemDescription">This mobile device locker is a complete charging storage solution.</p>
    <p class="itemPrice">Price: $${itemList[index].price}</p>
    <button i="${index}" class="add__btn">Add to cart</button>
    `;
    itemUL.append(el);
  }
  else if (itemList[index].name === "VR Headset & Drone") {
    const itemUL = document.querySelector("ul.laugh__list");
    const el = document.createElement("li");
    el.innerHTML = `
    <img src="./icons/icon-vr-drone.jpg" class="itemImage">
    <p class="itemTitle">${itemList[index].name}</p>
    <p class="itemDescription">Wireless headset and controllers provide a compact setup for maximum comfort. This state of the art drone brings you up close in FP-POV to enjoy a true outdoor feel.</p>
    <p class="itemPrice">Price: $${itemList[index].price}</p>
    <button i="${index}" class="add__btn">Add to cart</button>
    `;
    itemUL.append(el);
  }
  else if (itemList[index].name === "Spinning Bed") {
    const itemUL = document.querySelector("ul.lounge__list");
    const el = document.createElement("li");
    el.innerHTML = `
    <img src="./icons/icon-bed.jpg" class="itemImage">
    <p class="itemTitle">${itemList[index].name}</p>
    <p class="itemDescription">Rotate 360 degrees to block the sun from blinding you. Fully recline to enjoy your screentime in comfort.</p>
    <p class="itemPrice">Price: $${itemList[index].price}</p>
    <button i="${index}" class="add__btn">Add to cart</button>
    `;
    itemUL.append(el);
  }
  else if (itemList[index].name === "Microfiber Robe") {
    const itemUL = document.querySelector("ul.lounge__list");
    const el = document.createElement("li");
    el.innerHTML = `
    <img src="./icons/icon-robe.jpg" class="itemImage">
    <p class="itemTitle">${itemList[index].name}</p>
    <p class="itemDescription">Loomed from 100% long-staple Turkish cotton at 450 grams per square meter, this bathrobe is the new standard for high-end hotels and resorts worldwide.</p>
    <p class="itemPrice">Price: $${itemList[index].price}</p>
    <button i="${index}" class="add__btn">Add to cart</button>
    `;
    itemUL.append(el);
  }
  else if (itemList[index].name === "Tower Fan") {
    const itemUL = document.querySelector("ul.lounge__list");
    const el = document.createElement("li");
    el.innerHTML = `
    <img src="./icons/icon-fan.jpg" class="itemImage">
    <p class="itemTitle">${itemList[index].name}</p>
    <p class="itemDescription">This fan has effective heating and powerful personal cooling, for all seasons. Jet focus personal control rather than mother nature's will of the wind.</p>
    <p class="itemPrice">Price: $${itemList[index].price}</p>
    <button i="${index}" class="add__btn">Add to cart</button>
    `;
    itemUL.append(el);
  }
}