import createProducts from "./createProducts.js";
import shoppingCart from "./shoppingCart.js";
import { updateElementTextContent } from "./utils.js";

const productRoot = document.querySelector(".product-container");

// create product cards and add to the DOM
productRoot?.insertAdjacentHTML("afterbegin", createProducts());

const productCards = document.querySelectorAll(".product-card");

// event handlers

const handleAddToCart = (product: HTMLElement) => {
  const productId = product.dataset.productId;
  // test to determine if line item already exists -
  if (shoppingCart.lineItemExists(+productId)) {
    return;
  }
  shoppingCart.updateLineItem("new", product);
};

const handleUpdateCart = (action: "inc" | "dec", product: HTMLElement) => {
  // const productId = product.dataset.
  const productId = product.dataset.productId;
  // product not in cart so ignore click
  if (!shoppingCart.lineItemExists(+productId)) {
    return;
  }
  // handle action
  shoppingCart.updateLineItem(action, product);
};

const handleProductBtnClick = (evt: MouseEvent) => {
  // check to make sure that it is actually a button being clicked within the product card
  if (!evt.target.matches("button")) {
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

productCards.forEach((card) =>
  card.addEventListener("click", handleProductBtnClick)
);
