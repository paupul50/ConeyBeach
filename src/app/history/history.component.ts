import { HistoryConstants } from './history.constants';
import { Component } from '@angular/core';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {
  historyConstants = HistoryConstants;
}
