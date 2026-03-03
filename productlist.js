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

      <h3>${product.productdisplayname}</h3>
      <p class="soldoutTxt color_me_black_and_red">Sold Out</p>
      <p class="price">${product.price} DKK</p>
      <div class="discounted_element">
      <p>${product.discounted ? product.discountedPrice : ""} DKK</p>
      <p class="color_me_black_and_red"><span></span>${product.price} DKK</p>
      </div>
      
      <a href="productdetails.html?id=${product.id}">View Details</a>
      </article>`;
  });
}
