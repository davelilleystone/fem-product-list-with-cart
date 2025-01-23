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
}

export default LineItem;
