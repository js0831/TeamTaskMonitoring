import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  static prefix = 'ppos_';

  static save(name: string, data: any) {
      const jsonString = JSON.stringify(data);
      localStorage.setItem(this.prefix + name, jsonString);
  }

  static get(name: string) {
      const jsonString = localStorage.getItem(this.prefix + name);
      return JSON.parse(jsonString);
  }

  static remove(name: string) {
      localStorage.removeItem(this.prefix + name);
  }

}
