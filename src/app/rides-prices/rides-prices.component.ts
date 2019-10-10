import { RidesPricesConstants } from './rides-prices.constants';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-rides-prices',
  templateUrl: './rides-prices.component.html',
  styleUrls: ['./rides-prices.component.css']
})
export class RidesPricesComponent {
  ridesPricesConstants = RidesPricesConstants;

}
