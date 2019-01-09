import { Injectable } from "@angular/core";
import { Dictionary } from "./dictionary";

@Injectable()

export class SessionStorage {
  private data: Dictionary;

  constructor() {
    this.data = new Dictionary();
  }

  containKeys(key: string): Boolean {
    return this.data.containKeys(key);
  }

  addData(key: string, value: any) {
    this.data.add(key, value);
  }

  removeData(key: string) {
    this.data.remove(key);
  }

  updateData(key: string, newValue: any) {
    this.data.update(key, newValue);
  }

}
