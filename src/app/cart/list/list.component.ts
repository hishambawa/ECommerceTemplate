import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Item } from '../item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  items: Item[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    // this.items.push(new Item("test", "S", 1, 1000, 'assets/images/products/001-front.png'));
  }

}
