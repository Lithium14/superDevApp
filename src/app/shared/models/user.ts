export class User {
    public id?: string;
    public 'first-name'?: string;
    public 'last-name'?: string;
    public groupe?: string;
    public delete?: boolean;

    constructor(input?: User) {
      Object.assign(this, input);
    }
}
