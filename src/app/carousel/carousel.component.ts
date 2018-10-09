import { Component } from '@angular/core';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent{
  imageSources = ['assets/img/carousel/c1.jpg', 'assets/img/carousel/c2.jpg', 'assets/img/carousel/c3.jpg'];
  constructor() {
    
   }

}
