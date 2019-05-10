"use strict";

document.querySelector(".checkout-button").addEventListener("click", showCheckout);

function showCheckout() {
  document.querySelector(".checkout-page").style.display = "block";
  document.querySelector("p.priceOfCart").innerHTML = `Your total is $${total}`;
}

document.querySelector(".checkout-submit").addEventListener("click", showReceipt);

function showReceipt() {
  document.querySelector(".receipt-page").style.display = "block";
  let cashAmount = document.querySelector(".cashAmount").value;
  if (cashAmount < total) {
    document.querySelector("p.remainingCash").innerHTML = `You still owe $${(total - cashAmount)}`;
  }
  else if (cashAmount > total) {
    document.querySelector("p.owedCash").innerHTML = `We owe you $${(cashAmount - total)}`;
  }
}

let total = 0;












let shoppingCart = [];
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
}


const updateTotal = () => {
  for (let item of shoppingCart) { total += item.price; }
  document.querySelector("p.cart__total").innerHTML = `
  <p>Total: $${total}</p>
  <p>Tax: $${total * 0.06}</p>
  <p>Total w/tax: $${total += total * 0.06}</p>
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
    <p>${itemList[index].name}</p>
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
    <p>${itemList[index].name}</p>
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
    <p>${itemList[index].name}</p>
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
    <p>${itemList[index].name}</p>
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
    <p>${itemList[index].name}</p>
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
    <p>${itemList[index].name}</p>
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
    <p>${itemList[index].name}</p>
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
    <p>${itemList[index].name}</p>
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
    <p>${itemList[index].name}</p>
    <p>Price: $${itemList[index].price}</p>
    <button i="${index}" class="add__btn">Add to cart</button>
    `;
    itemUL.append(el);
  }
}