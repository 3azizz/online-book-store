import { Component, inject } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LandingPage } from '../landing-page/landing-page';
import { NewRealeseSection } from '../new-realese-section/new-realese-section';
import { FeaturedBookSection } from '../featured-book-section/featured-book-section';
import { DiscountSection } from "../discount-section/discount-section";
import { LatestArticlesSection } from '../latest-articles-section/latest-articles-section';
import { Footer } from "../footer/footer";
import { Header } from '../header/header';
import { Navbar } from '../navbar/navbar';
import { Auth } from '../auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,  imports: [
    Navbar,
    Header,
    MatToolbarModule,
     MatButtonModule, MatIconModule, LandingPage,
      NewRealeseSection, FeaturedBookSection,
       DiscountSection, 
       LatestArticlesSection, Footer , CommonModule], // CarouselModule should be imported in an NgModule (e.g., AppModule) if needed
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss'],
})
export class Dashboard {


 category: any = null;


  authService = inject(Auth);
  


  ngOnInit() {
    this.authService.getOneBook().subscribe((res: any) => {
      console.log(res);
      this.category = res.data;
    });
  }

}
