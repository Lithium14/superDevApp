export class Users {

  public id: number;
  public firstName: string;
  public lastName: string;
  public groupe: string;

  constructor(input?: Users) {
    Object.assign(this, input);
  }
}
