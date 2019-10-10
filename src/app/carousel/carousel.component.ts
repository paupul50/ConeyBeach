import { Component } from '@angular/core';
import { CarouselConstants } from './carousel.constants';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  imageSources = CarouselConstants.ImageSources;
}
