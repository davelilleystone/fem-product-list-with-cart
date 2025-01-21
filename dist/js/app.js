import createProducts from "./createProducts.js";
const productRoot = document.querySelector(".product-container");
// create product cards and add to the DOM
productRoot === null || productRoot === void 0 ? void 0 : productRoot.insertAdjacentHTML("afterbegin", createProducts());
const productCards = document.querySelectorAll(".product-card");
const handleProductBtnClick = (evt) => {
    const clicked_btn = evt.target;
    const clicked_btn_type = clicked_btn.dataset.btn;
    const product = evt.currentTarget;
    const productId = evt.currentTarget.dataset.productId;
    console.log({ clicked_btn, clicked_btn_type, product, productId });
};
productCards.forEach((card) => card.addEventListener("click", handleProductBtnClick));
//# sourceMappingURL=app.js.map