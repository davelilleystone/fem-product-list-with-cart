import LineItem from "./cartLineItem.js";
class ShoppingCart {
    constructor() {
        this.cart = [];
        this.checkOutRoot = document.querySelector(".cart__details");
    }
    // constructor() {
    // }
    addLineItem(id, description, cost) {
        this.cart.push(new LineItem(id, description, cost));
    }
    removeLineItem(id) {
        this.cart = this.cart.filter((lineItem) => lineItem.lineItemProductId !== id);
    }
    lineItemExists(id) {
        console.log("line item exists called");
        return this.getLineItem(id);
    }
    updateLineItem(action, product) {
        let updateCheckout = false;
        const productId = +product.dataset.productId;
        if (action === "new") {
            this.addLineItem(productId, product.dataset.productDescription, +product.dataset.productPrice);
            updateCheckout = true;
        }
        else if (action === "inc" || action === "dec") {
            const lineItem = this.getLineItem(productId);
            if (action === "inc") {
                // lineItem?.updateLineQuantity("inc");
                // lineItem?.updateLineTotal();
                lineItem === null || lineItem === void 0 ? void 0 : lineItem.updateLineQuantityAndTotal("inc");
                updateCheckout = true;
            }
            else {
                const currentQuantity = lineItem === null || lineItem === void 0 ? void 0 : lineItem.getLineQuantity();
                if (currentQuantity === 1) {
                    // ignore click if line item quantity = 1
                }
                else {
                    lineItem === null || lineItem === void 0 ? void 0 : lineItem.updateLineQuantityAndTotal("dec");
                    updateCheckout = true;
                }
            }
        }
        else {
            throw Error("Error in updateLineItem - unknown action");
        }
        if (updateCheckout) {
            console.log("Checkout to be updated");
            this.updateCheckout();
        }
    }
    updateCheckout() {
        console.log(this.checkOutRoot);
    }
    getLineItem(id) {
        return this.cart.find((lineItem) => {
            return lineItem.lineItemProductId === id;
        });
    }
    getCart() {
        return this.cart;
    }
    // get cartTotal() {
    //   return this.cart.reduce((acc, lineItem) => (acc += lineItem.lineItemTotal));
    // }
    get isEmpty() {
        return this.cart.length === 0;
    }
}
export default new ShoppingCart();
//# sourceMappingURL=shoppingCart.js.map