export class Product {
  public id: string;
  public item: string;
  public price: number;

  constructor(input: Product) {
    Object.assign(this, input);
  }
}
