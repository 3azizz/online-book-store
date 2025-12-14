import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LandingPage } from '../landing-page/landing-page';

@Component({
  selector: 'app-dashboard',
  standalone: true,  imports: [MatToolbarModule, MatButtonModule, MatIconModule,LandingPage], // CarouselModule should be imported in an NgModule (e.g., AppModule) if needed
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss'],
})
export class Dashboard {

}
