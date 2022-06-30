import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart/cart.service';
import { Item } from 'src/app/cart/item';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  product: Product | undefined;
  size!: string;
  quantity: number = 1;

  constructor(private productService: ProductService, private cartService: CartService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('productId'));
    
    this.productService.getProducts().subscribe((products: Product[]) => {
      this.product = products.find(
        (product) => product.id == productId
      );
    });
  }

  setSize(size: string): void {
    this.size = size;
  }

  setQuantity(value: number): void {
    if(value == 1 && this.quantity < 10) this.quantity++;
    else if (value == 0 && this.quantity > 1) this.quantity--;
  }

  addToCart(name: string | undefined, price: number | undefined, image: string | undefined): void {
    if(this.size == undefined) {
      alert("Please select a size");
    }

    else if(name == undefined || price == undefined || image == undefined) {
      alert("Error");
    }

    else {
      let cartItem = new Item(name, this.size, this.quantity, price, image);
      this.cartService.add(cartItem);
    }
  }

}
