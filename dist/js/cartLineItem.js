class LineItem {
    constructor(lineItemProductId, lineItemDescription, lineItemCost) {
        this.lineItemProductId = lineItemProductId;
        this.lineItemDescription = lineItemDescription;
        this.lineItemCost = lineItemCost;
        this.lineItemQuantity = 1;
        this.lineItemTotal = lineItemCost;
    }
    updateLineQuantity(action) {
        if (action === "inc") {
            this.lineItemQuantity += 1;
        }
        else if (action === "dec") {
            this.lineItemQuantity -= 1;
        }
        return this;
    }
    updateLineTotal() {
        this.lineItemTotal = this.lineItemQuantity * this.lineItemCost;
    }
    updateLineQuantityAndTotal(action) {
        this.updateLineQuantity(action);
        this.updateLineTotal();
    }
    getLineQuantity() {
        return this.lineItemQuantity;
    }
}
export default LineItem;
//# sourceMappingURL=cartLineItem.js.map