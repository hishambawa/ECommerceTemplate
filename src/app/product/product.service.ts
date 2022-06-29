import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Filter } from './filter/filter';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getProducts() {
    return this.httpClient.get<Product[]>('/assets/products.json');
  }

  getCategories() {
    return this.httpClient.get<Filter[]>('/assets/filters.json');
  }
}
