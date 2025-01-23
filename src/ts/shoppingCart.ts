import LineItem from "./cartLineItem.js";

class ShoppingCart {
  cart: LineItem[] = [];

  // constructor() {

  // }

  addLineItem(id: number, description: string, cost: number) {
    this.cart.push(new LineItem(id, description, cost));
  }

  removeLineItem(id: number) {
    this.cart = this.cart.filter(
      (lineItem) => lineItem.lineItemProductId !== id
    );
  }

  lineItemExists(id: number) {
    console.log("line item exists called");
    console.log();
    return this.getLineItem(id);
  }

  updateLineItem(action, product) {
    const productId = +product.dataset.productId;
    if (action === "new") {
      console.log("create new line item");
      this.addLineItem(
        productId,
        product.dataset.productDescription,
        +product.dataset.productPrice
      );
      console.dir(this.getCart());
    } else if (action === "inc") {
      console.log("increment line quantity and update line total");
      this.getLineItem(productId)
        ?.updateLineQuantity("inc")
        .updateLineItemTotal();
      console.dir(this.getCart());
    } else if (action === "dec") {
      console.log("decremet line quantity and update line total");
    } else {
      console.log("An error has occured");
    }
  }

  getLineItem(id: number) {
    return this.cart.find((lineItem) => {
      return lineItem.lineItemProductId === id;
    });
  }

  getCart() {
    return this.cart;
  }

  get cartTotal() {
    return this.cart.reduce(acc, (lineItem) => (acc += lineItem.lineItemTotal));
  }

  get isEmpty() {
    return this.cart.length === 0;
  }
}

export default new ShoppingCart();
