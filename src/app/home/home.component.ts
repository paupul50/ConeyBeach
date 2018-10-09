import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeItems: Post[]
  constructor() { 
    this.homeItems = [
      new Post('News', 'What\'s going on', 'assets/img/news.jpg', 0, "/news"),
      new Post('Find Us', 'This is how you find us', 'assets/img/find_us.jpg', 0, "/findus"),
      new Post('History', 'What we are and our history', 'assets/img/history.jpg', 0, '/history'),
      new Post('Exciting Rides', 'Some message about why you should come and have a ride here.', 'assets/img/carousel/c1.jpg', 0, "/rides"),
      new Post('Memorable Events', 'Yearly events and something you should look forward to.', 'assets/img/carousel/c2.jpg', 0, "/events"),
      new Post('Programs', 'Want to meet space guy or minions? Like huge discounts? Check out our programs!', 'assets/img/carousel/c3.jpg', 0, '/programs'),
    ]
  }

  ngOnInit() {
  }

}
