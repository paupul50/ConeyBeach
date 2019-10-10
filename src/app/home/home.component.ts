import { Component } from '@angular/core';
import { HomeConstants } from './home.constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  homeConstants = HomeConstants;
}
