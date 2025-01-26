class LineItem {
  lineItemQuantity: number;
  lineItemCost: number;
  lineItemDescription: string;
  lineItemTotal: number;
  lineItemProductId: number;

  constructor(lineItemProductId, lineItemDescription, lineItemCost) {
    this.lineItemProductId = lineItemProductId;
    this.lineItemDescription = lineItemDescription;
    this.lineItemCost = lineItemCost;
    this.lineItemQuantity = 1;
    this.lineItemTotal = lineItemCost;
  }

  updateLineQuantity(action: "inc" | "dec") {
    if (action === "inc") {
      this.lineItemQuantity += 1;
    } else if (action === "dec") {
      this.lineItemQuantity -= 1;
    }
  }

  updateLineTotal() {
    this.lineItemTotal = this.lineItemQuantity * this.lineItemCost;
  }

  updateLineQuantityAndTotal(action: "inc" | "dec") {
    this.updateLineQuantity(action);
    this.updateLineTotal();
  }

  getLineQuantity() {
    return this.lineItemQuantity;
  }
}

export default LineItem;
