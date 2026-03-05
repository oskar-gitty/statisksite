"use strict";

const Params = new URLSearchParams(window.location.search);
const category = Params.get("category");

fetch(`https://kea-alt-del.dk/t7/api/products?category=${category}&limit=50`)
  .then((response) => response.json())
  .then((data) => {
    showProducts(data);
  });

const productContainer = document.querySelector("#productContainer");

function showProducts(productsArr) {
  document.querySelector(".titel").innerHTML = `<h2>${category}</h2>`;
  productContainer.innerHTML = "";
  productsArr.forEach((product) => {
    console.log(product);

    productContainer.innerHTML += `
      <article class="smallProduct">
      <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.productdisplayname}">
      <p class="${product.soldout ? "" : "displaynone"}">Sold out</p>
      
      <h3>${product.productdisplayname}</h3>
      <p class="price">${product.price} DKK</p>
      <p class="${product.discount ? "" : "displaynone"}">${product.discount} %</p>
      <p class="${product.discount ? "" : "displaynone"}">Now DKK <span>${Math.ceil((product.price / 100) * product.discount)}</span></p>
      <div class="discounted_element">
      </div>
      
      <a href="productdetails.html?id=${product.id}">View Details</a>
      </article>`;
  });
}
