import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isHomePage!: boolean;
  isContactPage!: boolean;
  isCollapsed: boolean = false;

  constructor(private router: Router, private cartService: CartService) { this.count = this.cartService.getItems().length;}

  count: number = 0;

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects;

        if(url == '/'){
          this.isHomePage = true;
          this.isContactPage = false;
        } 
        else if(url == '/contact') {
          this.isContactPage = true;
          this.isHomePage = false;
        }
        else{
           this.isHomePage = false;
           this.isContactPage = false;
        }

        // Hide the navbar on mobile after clicking on a link
        this.isCollapsed = false;

        this.count = this.cartService.getItems().length;
      }
    });

  }

  showNavbar(): void {
    this.isCollapsed = !this.isCollapsed;
  }

}
