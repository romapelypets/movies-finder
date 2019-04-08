import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() {}

  setItem(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  getItem(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
  }

  itemExist(key: string) {
    return localStorage.getItem(key) !== null;
  }

  clear() {
    localStorage.clear();
  }
}
