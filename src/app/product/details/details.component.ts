import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  product: Product | undefined;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('productId'));
    
    this.productService.getProducts().subscribe((products: Product[]) => {
      this.product = products.find(
        (product) => product.id == productId
      );
    });
  }

}
