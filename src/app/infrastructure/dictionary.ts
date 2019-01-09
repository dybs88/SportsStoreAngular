

export class Dictionary {
  public keys: string[];
  public values: any[];

  constructor() {
    this.keys = new Array<string>();
    this.values = new Array<any>();
  }

  containKeys(key: string): Boolean {
    if (this.keys.find(k => k === key) !== undefined) {
      return true;
    }

    return false;
  }

  add(key: string, value: any) {
    if (this.containKeys(key)) {
      return;
    }

    this.keys.push(key);
    this.values.push(value);
  }

  remove(key: string) {
    if (this.containKeys(key)) {
      let index = this.keys.indexOf(key);
      this.keys.splice(index, 1);
      this.values.splice(index, 1);
    }
  }

  update(key: string, newValue: any) {
    if (this.containKeys(key)) {
      let index = this.keys.indexOf(key);
      this.values.splice(index, 1, newValue);
    }
  }
}
