import { Injectable } from '@angular/core';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Item[] = [];

  constructor() { }

  add(item: Item): void {
    this.items.push(item);
    alert("added");
  }

  getItems(): Item[] {
    return this.items;
  }
}
