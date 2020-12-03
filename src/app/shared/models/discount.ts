export class Discount {
  public groupe: string;
  public 'discount-percent': number;

  constructor(input?: Discount) {
    Object.assign(this, input);
  }
}
