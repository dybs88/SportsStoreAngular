export class User {
  constructor(
    public userName: string,
    public token: string,
    public email: string,
    public firstName?: string,
    public lastName?: string,
    public phoneNumber?: string) { }
}
