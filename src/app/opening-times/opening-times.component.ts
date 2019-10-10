import { OpeningTimesConstants } from './opening-times.constants';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opening-times',
  templateUrl: './opening-times.component.html',
  styleUrls: ['./opening-times.component.css']
})
export class OpeningTimesComponent {
  openingTimesConstants = OpeningTimesConstants;

  isLastOpeningTimeElement(element: number): boolean {
    console.log(element);
    return element === 6;
  }
}
