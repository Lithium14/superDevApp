export class Commandes {
  public _id: string;
  public userId: string;
  public quotation: Array<{productId: string, quantity: number}>;

  constructor(input: Commandes) {
    Object.assign(this, input);
  }
}
