export class Product {

  constructor(
    public productID?: number,
    public name?: string,
    public category?: string,
    public description?: string,
    public netPrice?: number,
    public grossPrice?: number
  ) { }
}
