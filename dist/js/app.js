import createProducts from "./createProducts.js";
import shoppingCart from "./shoppingCart.js";
import { updateElementTextContent } from "./utils.js";
const productRoot = document.querySelector(".product-container");
// create product cards and add to the DOM
productRoot === null || productRoot === void 0 ? void 0 : productRoot.insertAdjacentHTML("afterbegin", createProducts());
const productCards = document.querySelectorAll(".product-card");
// event handlers
const handleAddToCart = (product) => {
    const productId = +product.dataset.productId;
    if (shoppingCart.lineItemExists(productId)) {
        return;
    }
    const productDescription = product.dataset.productDescription;
    const productPrice = product.dataset.productPrice;
    shoppingCart.addLineItem(+productId, productDescription, +productPrice);
    const addToCartBtn = product.querySelector(".product-card__button--add");
    if (addToCartBtn) {
        updateElementTextContent(addToCartBtn, "1");
    }
    else {
        throw Error();
    }
    console.log(shoppingCart);
};
const handleUpdateCart = (action, product) => {
    console.log("Update cart: " + action);
    console.log(product);
};
const handleProductBtnClick = (evt) => {
    // check to make sure that it is actually a button being clicked within the product card
    if (!evt.target.matches("button")) {
        // console.log("not a button!");
        return;
    }
    const clicked_btn = evt.target;
    const clicked_btn_type = clicked_btn.dataset.btn;
    const product = evt.currentTarget;
    switch (clicked_btn_type) {
        case "add":
            handleAddToCart(product);
            break;
        case "inc":
        case "dec":
            handleUpdateCart(clicked_btn_type, product);
            break;
        default:
            throw Error("Unknown Button Type");
    }
};
productCards.forEach((card) => card.addEventListener("click", handleProductBtnClick));
//# sourceMappingURL=app.js.map