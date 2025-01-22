class ShoppingCart {
  cart: [];

  constructor() {
    this.cart = [];
  }

  get isEmpty() {
    return this.cart.length === 0;
  }
}

export default new ShoppingCart();
