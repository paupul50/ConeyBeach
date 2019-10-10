import { Component } from '@angular/core';
import { EventsConstants } from './events.constants';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  eventsConstants = EventsConstants;

  isEventNumberEven(eventNumber: number): boolean {
    return eventNumber % 2 === 0;
  }
}
