export class Commandes {


  constructor(input: Commandes) {
    Object.assign(this, input);
  }
  public _id: string;
  public userId: string;
  public quotation: Array<{productId: string, quantity: number}>;
}
