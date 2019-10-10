import { OpeningTimeModel } from './../opening-time.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-opening-time',
  templateUrl: './opening-time.component.html',
  styleUrls: ['./opening-time.component.css']
})
export class OpeningTimeComponent {
  @Input() openingTime: OpeningTimeModel;
}
