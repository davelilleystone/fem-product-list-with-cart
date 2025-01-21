import createProducts from "./createProducts.js";
const productRoot = document.querySelector(".product-container");
// create product cards and add to the DOM
productRoot === null || productRoot === void 0 ? void 0 : productRoot.insertAdjacentHTML("afterbegin", createProducts());
const productCards = document.querySelectorAll(".product-card");
productCards.forEach((card) => card.addEventListener("click", (evt) => {
    const clicked_btn = evt.target;
    const product = evt.currentTarget;
    const productId = evt.currentTarget.dataset.productId;
    console.log({ clicked_btn, product, productId });
    console.log(product.querySelector(".product-card__button--add"));
}));
//# sourceMappingURL=app.js.map