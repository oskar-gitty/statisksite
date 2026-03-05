const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const productContainer = document.querySelector("#productContainer");
console.log("id: ", id);

fetch(`https://kea-alt-del.dk/t7/api/products/${id}`)
  .then((response) => response.json())
  .then((data) => {
    console.log("data: ", data);
    productContainer.innerHTML = `
      <main>
      </figure>
      <img src="https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp" alt="${data.productdisplayname}">
      <span class="salelabel"></span>
      <figure>
      <section class="productDetails">
      <h2 class="productName">${data.productdisplayname}</h2>
      <div>
      <p class="articleType"><span class="bold">Type: </span> ${data.articletype}</p>
      <p class="productCategory"><span class="bold">Kategori: </span> ${data.category}</p>
      <p class="productPrice"><span class="bold">Pris: </span> ${data.price}</p>
      </div>
        <button>Add to Cart</button>
      </section>
    </main>
    `;
  });
