import { Injectable } from '@angular/core';
@Injectable({
providedIn: 'root',
})
export class AppStorage {
  constructor() { }
  
  set = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  get = (key: string) => {
    let values = localStorage.getItem(key);
    return values != null && values != '' ? JSON.parse(values) : null;
  };
  removeItem = (key: string) => localStorage.removeItem(key);
  clear = () => localStorage.clear();
}
