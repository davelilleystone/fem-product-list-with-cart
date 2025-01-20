import createProducts from "./createProducts.js";
const productRoot = document.querySelector(".product-container");
// create product cards and add to the DOM
productRoot === null || productRoot === void 0 ? void 0 : productRoot.insertAdjacentHTML("afterbegin", createProducts());
const productCards = document.querySelectorAll(".product-card");
console.log(productCards);
productRoot === null || productRoot === void 0 ? void 0 : productRoot.addEventListener("click", (evt) => console.log(evt));
//# sourceMappingURL=app.js.map