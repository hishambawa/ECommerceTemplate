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

  categories = [
    { "type": "gender", "selected": false, "sub": ["men", "women"] },
    { "type": "category", "selected": false, "sub": ["t-shirts", "shorts", "shoes"] },
    { "type": "color", "selected": false, "sub": ["red", "blue", "yellow"] },
    { "type": "price", "selected": false, "sub": ["under LKR 5,000", "under LKR 10,000", "under LKR 15,000"] },
  ];

  isVisible: boolean = false;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getCategories().subscribe((filters: Filter[]) => {
      this.filters = filters;
    });
  }

  showOptions(type: string) {
    this.categories.forEach((category) => {
      if(category.type == type) {
        category.selected = !category.selected;
      }
      else {
        category.selected = false;
      }
    });
  }

  toggleFilter(): void {
    this.isVisible = !this.isVisible;
  }

}
