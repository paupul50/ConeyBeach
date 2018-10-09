import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent implements OnInit {
  programs: Post[]
  constructor() {
    this.programs = [
      new Post('Costume day', 'Want to meet pricess zelma, space guy or the cow boy guy? Come come', 'assets/img/programs/prog2.jpg'),
      new Post('One pound a ride night', 'On wednesdays and fridays from 5pm!', 'assets/img/programs/prog1.jpg')
    ]
   }

  ngOnInit() {
  }

}
