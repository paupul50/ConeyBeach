import { Component, OnInit } from '@angular/core';
import {Post} from '../post.model';
@Component({
  selector: 'app-rides-prices',
  templateUrl: './rides-prices.component.html',
  styleUrls: ['./rides-prices.component.css']
})
export class RidesPricesComponent implements OnInit {
  rides: Post[];

  constructor() { 
    this.rides = [
      new Post('Waltzers', 'If you would like to ride, please pay in the car', 'assets/img/rides/waltzers.jpg', 2),
      new Post('Dodgems', 'It\'s amazing fun! Dodgems, dodgems!', 'assets/img/rides/dodgems.jpg', 3),
      new Post('Go Carts', 'No bumping!', 'assets/img/rides/gocarts.jpg', 5),
      new Post('Slide', 'Good ride, but the operator is grumpy so avoid if possible', 'assets/img/rides/slide.jpg', 2),
      new Post('Beach Party', 'A swing for adults', 'assets/img/rides/beach_party.jpg', 2.5),
      new Post('Gallopers', 'Something something', 'assets/img/rides/gallopers.jpg', 2),
      new Post('Ghost Train', 'Very scary place. You won\'t be disappointed', 'assets/img/rides/ghost_train.jpg', 2),
      new Post('Miami Madness', 'Best Ride in the park tbh', 'assets/img/rides/miami_madness.jpg', 2)
    ]
  }

  ngOnInit() {
  }

}
