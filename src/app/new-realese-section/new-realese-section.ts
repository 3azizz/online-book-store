import { Component, inject } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Auth } from '../auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-realese-section',
  imports: [CarouselModule,CommonModule],
  templateUrl: './new-realese-section.html',
  styleUrl: './new-realese-section.scss',
})
export class NewRealeseSection {


  bookList: any[] = [];

  authService = inject(Auth);
  

  ngOnInit() {
    this.authService.getBooks().subscribe((res: { data: any; }) => {
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
        items: 4
      },
      400: {
        items: 4
      },
      740: {
        items: 4
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

}
