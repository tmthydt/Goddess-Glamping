"use strict";


document.querySelector(".item__container").addEventListener("click", function(event) {
  // add the click event to display the <li> elements
    if (event.target.classList.contains("container__title")) {
      event.target.nextElementSibling.classList.toggle("hidden");
    }
    
    if (event.target.classList.contains("add__btn")) {
      console.log("YOU ARE BUYING SOME SHIT");
    }
  
  });


document.querySelector(".material-icons").addEventListener("click", showCart);

function showCart() {
  document.querySelector(".cart__container").style.display = "block";
}

document.querySelector(".checkout-button").addEventListener("click", showCheckout);

function showCheckout() {
  document.querySelector(".checkout-page").style.display = "block";
  document.querySelector("p.priceOfCart").innerHTML = `Your total is $${total.toFixed(2)}`;
}

document.querySelector(".checkout-submit").addEventListener("click", showReceipt);

function showReceipt() {
  document.querySelector(".receipt-page").style.display = "block";
  let cashAmount = document.querySelector(".cashAmount").value;
  if (cashAmount > total) {
    document.querySelector("p.owedCash").innerHTML = `We owe you $${(cashAmount - total).toFixed(2)}`;
  }
  console.log(shoppingCart[0]);
  document.querySelector("p.itemsPurchased").innerHTML = `
  <p>Subtotal: $${total.toFixed(2)}</p>
  <p>Total: $${(total += total * 0.06).toFixed(2)}</p>
  <p>Items purchased:</p>
  <p>${shoppingCart[0].name}: $${shoppingCart[0].price}</p>`;
}


let total = 0.;
let shoppingCart = [];
let receipt = shoppingCart;
let itemList = [
  { name: "Armand de Brignac Champagne", price: 300 },
  { name: "Espresso Machine", price: 400 },
  { name: "Personal Chef", price: 5000 },
  { name: "Smart Projector", price: 1200 },
  { name: "Charging Station", price: 350 },
  { name: "VR Headset & Drone", price: 500 },
  { name: "Spinning Bed", price: 1500 },
  { name: "Microfiber Robe", price: 150 },
  { name: "Tower Fan", price: 500 }
];

const addItem = (newItem) => shoppingCart = [...shoppingCart, { ...newItem }];

const removeItem = itemName => {
  const index = shoppingCart.findIndex(item => item.name === itemName);
  shoppingCart = [...shoppingCart.slice(0, index), ...shoppingCart.slice(index + 1)];
  updateTotal();
}

const updateTotal = () => {
  total = 0;
  for (let item of shoppingCart) { total += item.price; }
  document.querySelector("p.cart__total").innerHTML = `
  <p>Subtotal: $${total.toFixed(2)}</p>
  <p>Tax: $${(total * 0.06).toFixed(2)}</p>
  <p>Total w/tax: $${(total += total * 0.06).toFixed(2)}</p>
  `;
}

const main = document.querySelector("main");

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

function display(item) {
  const el = document.createElement("li");
  el.innerHTML = `
  <p>${item.name}</p>
  <p>Price: $${item.price}</p>
  <button name="${item.name}" class="remove__btn">Remove from cart</button>`;
  document.querySelector("ul.cart__list").append(el);
}

for (let index in itemList) {
  if (itemList[index].name === "Armand de Brignac Champagne") {
    const itemUL = document.querySelector("ul.live__list");
    const el = document.createElement("li");
    el.innerHTML = `
    <img src="./icons/icon-champagne.jpg">
    <p class="itemTitle">${itemList[index].name}</p>
    <p class="itemDescription">Intensely fruity, yet vinous and elegant on the palate. Powerful yet pure.</p>
    <p>Price: $${itemList[index].price}</p>
    <button i="${index}" class="add__btn">Add to cart</button>
    `;
    itemUL.append(el);
  }
  else if (itemList[index].name === "Espresso Machine") {
    const itemUL = document.querySelector("ul.live__list");
    const el = document.createElement("li");
    el.innerHTML = `
    <img src="./icons/icon-espresso.jpg">
    <p class="itemTitle">${itemList[index].name}</p>
    <p class="itemDescription">Coffeehouse experience in one touch. This semi-automatic machine extracts the espresso you’ve come to expect from your barista.</p>
    <p>Price: $${itemList[index].price}</p>
    <button i="${index}" class="add__btn">Add to cart</button>
    `;
    itemUL.append(el);
  }
  else if (itemList[index].name === "Personal Chef") {
    const itemUL = document.querySelector("ul.live__list");
    const el = document.createElement("li");
    el.innerHTML = `
    <img src="./icons/icon-chef.jpg">
    <p class="itemTitle">${itemList[index].name}</p>
    <p class="itemDescription">Internationally renowned, chef Gordon Ramsay has opened a string of successful restaurants across the globe.</p>
    <p>Price: $${itemList[index].price}</p>
    <button i="${index}" class="add__btn">Add to cart</button>
    `;
    itemUL.append(el);
  }
  else if (itemList[index].name === "Smart Projector") {
    const itemUL = document.querySelector("ul.laugh__list");
    const el = document.createElement("li");
    el.innerHTML = `
    <img src="./icons/icon-projector.jpg">
    <p class="itemTitle">${itemList[index].name}</p>
    <p class="itemDescription">Enjoy smart TV functionality on the big screen with this home theater projector.</p>
    <p>Price: $${itemList[index].price}</p>
    <button i="${index}" class="add__btn">Add to cart</button>
    `;
    itemUL.append(el);
  }
  else if (itemList[index].name === "Charging Station") {
    const itemUL = document.querySelector("ul.laugh__list");
    const el = document.createElement("li");
    el.innerHTML = `
    <img src="./icons/icon-charging.png">
    <p class="itemTitle">${itemList[index].name}</p>
    <p class="itemDescription">This mobile device locker is a complete charging storage solution.</p>
    <p>Price: $${itemList[index].price}</p>
    <button i="${index}" class="add__btn">Add to cart</button>
    `;
    itemUL.append(el);
  }
  else if (itemList[index].name === "VR Headset & Drone") {
    const itemUL = document.querySelector("ul.laugh__list");
    const el = document.createElement("li");
    el.innerHTML = `
    <img src="./icons/icon-vr-drone.jpg">
    <p class="itemTitle">${itemList[index].name}</p>
    <p class="itemDescription">Wireless headset and controllers provide a compact setup for maximum comfort. This state of the art drone brings you up close in FP-POV to enjoy a true outdoor feel.</p>
    <p>Price: $${itemList[index].price}</p>
    <button i="${index}" class="add__btn">Add to cart</button>
    `;
    itemUL.append(el);
  }
  else if (itemList[index].name === "Spinning Bed") {
    const itemUL = document.querySelector("ul.lounge__list");
    const el = document.createElement("li");
    el.innerHTML = `
    <img src="./icons/icon-bed.jpg">
    <p class="itemTitle">${itemList[index].name}</p>
    <p class="itemDescription">Rotate 360 degrees to block the sun from blinding you. Fully recline to enjoy your screentime in comfort.</p>
    <p>Price: $${itemList[index].price}</p>
    <button i="${index}" class="add__btn">Add to cart</button>
    `;
    itemUL.append(el);
  }
  else if (itemList[index].name === "Microfiber Robe") {
    const itemUL = document.querySelector("ul.lounge__list");
    const el = document.createElement("li");
    el.innerHTML = `
    <img src="./icons/icon-robe.jpg">
    <p class="itemTitle">${itemList[index].name}</p>
    <p class="itemDescription">Loomed from 100% long-staple Turkish cotton at 450 grams per square meter, this bathrobe is the new standard for high-end hotels and resorts worldwide.</p>
    <p>Price: $${itemList[index].price}</p>
    <button i="${index}" class="add__btn">Add to cart</button>
    `;
    itemUL.append(el);
  }
  else if (itemList[index].name === "Tower Fan") {
    const itemUL = document.querySelector("ul.lounge__list");
    const el = document.createElement("li");
    el.innerHTML = `
    <img src="./icons/icon-fan.jpg">
    <p class="itemTitle">${itemList[index].name}</p>
    <p class="itemDescription">This fan has effective heating and powerful personal cooling, for all seasons. Jet focus personal control rather than mother nature's will of the wind.</p>
    <p>Price: $${itemList[index].price}</p>
    <button i="${index}" class="add__btn">Add to cart</button>
    `;
    itemUL.append(el);
  }
}