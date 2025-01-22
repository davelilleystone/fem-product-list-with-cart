import createProducts from "./createProducts.js";

const productRoot = document.querySelector(".product-container");

// create product cards and add to the DOM
productRoot?.insertAdjacentHTML("afterbegin", createProducts());

const productCards = document.querySelectorAll(".product-card");

const handleAddToCart = (product: HTMLElement) => {
  console.log("add product to cart");
  console.log(product);
};

// const handleIncrementProductQuantity = () => {
//   console.log("inc product");
// };

// const handleDecrementProductQuantity = () => {
//   console.log("dec product");
// };

const handleUpdateCart = (action: "inc" | "dec", product: HTMLElement) => {
  console.log("Update cart: " + action);
  console.log(product);
};

const handleProductBtnClick = (evt: MouseEvent) => {
  // check to make sure that it is actually a button being clicked within the product card
  if (!evt.target.matches("button")) {
    console.log("not a button!");
    return;
  }

  const clicked_btn = evt.target;
  const clicked_btn_type = clicked_btn.dataset.btn;
  const product = evt.currentTarget;

  if (!clicked_btn.matches("button")) {
    console.log("not a button!");
    return;
  }

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
