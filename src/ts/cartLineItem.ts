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
    return this;
  }

  updateLineItemTotal() {
    this.lineItemTotal = this.lineItemQuantity * this.lineItemCost;
  }
}

export default LineItem;
