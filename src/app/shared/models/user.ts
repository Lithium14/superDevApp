export class User {
    public id: number;
    public 'first-name': string;
    public 'last-name': string;
    public groupe: string;

    constructor(input?: User) {
      Object.assign(this, input);
    }
}
