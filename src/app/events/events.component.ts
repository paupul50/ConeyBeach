import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events: Post[];
  constructor() {
    this.events = [
      new Post('Elvis festival', 'Some sort of one time a year festival', 'assets/img/events/elvis.jpg'),
      new Post('Donkey riding', 'These are donkeys. Not horses', 'assets/img/events/donkeys.jpg'),
      new Post('Beach Running', 'Fun and exciting active rest', 'assets/img/events/beach_running.jpg'),
    ]
  }

  ngOnInit() {
  }

}
