import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() product!: Product;
  public src: string = '';
  public hovered: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.src = this.product.frontImage;
  }

  changeImage(): void {
    this.src = this.product.backImage;
    this.hovered = true;
  }

  resetImage(): void {
    this.src = this.product.frontImage;
    this.hovered = false;
  }

}
