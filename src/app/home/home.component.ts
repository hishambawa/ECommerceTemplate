import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  mainSrc: string[] = ['/assets/home-1.jpg', '/assets/home-2.jpg', '/assets/home-3.jpg'];
  mainSrcIndex: number = 0;
  constructor() { }

  ngOnInit(): void {
   
  }

}
