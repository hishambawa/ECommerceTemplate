import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Filter } from './filter';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  filters: Filter[] = [];

  isCategory: boolean = false;
  isColor: boolean = false;
  isPrice: boolean = false;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getCategories().subscribe((filters: Filter[]) => {
      this.filters = filters;
    });
  }

  showOptions(option: string): void {
    switch (option.toLocaleLowerCase()) {
      case 'category':
        this.isCategory = !this.isCategory;
        this.isColor = false;
        this.isPrice = false;
        break;
      case 'color':
        this.isColor = !this.isColor;
        this.isCategory = false;
        this.isPrice = false;
        break;
      case 'price':
        this.isPrice = !this.isPrice;
        this.isCategory = false;
        this.isColor = false;
        break;
    }
  }

}
