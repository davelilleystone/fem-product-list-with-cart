import createProducts from "./createProducts.js";

const productRoot = document.querySelector(".product-container");

// create product cards and add to the DOM
productRoot?.insertAdjacentHTML("afterbegin", createProducts());
