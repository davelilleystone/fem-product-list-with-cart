import LineItem from "./cartLineItem.js";

class ShoppingCart {
  cart: LineItem[] = [];

  // constructor() {

  // }

  addLineItem(id: number, description: string, cost: number) {
    this.cart.push(new LineItem(id, description, cost));
  }

  lineItemExists(id: number) {
    if (this.cart.length) {
      return this.cart.find((product) => product.lineItemProductId === id);
    }
    return false;
  }

  get isEmpty() {
    return this.cart.length === 0;
  }
}

export default new ShoppingCart();
