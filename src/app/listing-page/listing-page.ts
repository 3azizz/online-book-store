import { Component, inject } from '@angular/core';
import { Header } from '../header/header';
import { Navbar } from "../navbar/navbar";
import { MatIcon } from "@angular/material/icon";
import { Footer } from "../footer/footer";
import { Auth } from '../auth';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-listing-page',
  imports: [Header, MatIcon, Footer,CarouselModule,CommonModule],
  templateUrl: './listing-page.html',
  styleUrl: './listing-page.scss',
})
export class ListingPage {


bookList: any[] = [];

  authService = inject(Auth);
book: any;

  ngOnInit() {


    this.authService.getBooks().subscribe((res) => {
      console.log(res);
      this.bookList = res.data;
    });
  }



  
   customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 3
      },
      400: {
        items: 3
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }
}
