import LineItem from "./cartLineItem.js";
class ShoppingCart {
    constructor() {
        this.cart = [];
    }
    addLineItem(id, description, cost) {
        this.cart.push(new LineItem(id, description, cost));
    }
    lineItemExists(id) {
        if (this.cart.length) {
            return this.cart.find((product) => product.lineItemProductId === id);
            ;
        }
        return false;
    }
    get isEmpty() {
        return this.cart.length === 0;
    }
}
export default new ShoppingCart();
//# sourceMappingURL=shoppingCart.js.map