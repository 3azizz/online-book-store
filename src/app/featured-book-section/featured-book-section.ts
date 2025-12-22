import { Component, inject } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Auth } from '../auth';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-featured-book-section',
  imports: [CarouselModule , CommonModule],
  templateUrl: './featured-book-section.html',
  styleUrl: './featured-book-section.scss',
})
export class FeaturedBookSection {

  onebook: any = null;


  authService = inject(Auth);
  


  ngOnInit() {
    this.authService.getOneBook().subscribe((res: any) => {
      console.log(res);
      this.onebook = res.data;
    });
  }
  
   customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
}
