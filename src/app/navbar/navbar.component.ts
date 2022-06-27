import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isHomePage!: boolean;
  isContactPage!: boolean;
  isCollapsed: boolean = false;

  constructor(private router: Router) {}

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
      }
    });
  }

  showNavbar(): void {
    this.isCollapsed = !this.isCollapsed;
  }

}
