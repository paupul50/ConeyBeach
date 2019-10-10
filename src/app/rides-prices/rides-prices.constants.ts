import { DataCBModel } from '../API-test/dataCB.model';

export class RidesPricesConstants {
  static readonly Rides = [
    new DataCBModel({
      title: 'Waltzers',
      body: 'If you would like to ride, please pay in the car', imageUrl: 'assets/img/rides/waltzers.jpg', price: 2
    }),
    new DataCBModel({
      title: 'Dodgems',
      body: 'It\'s amazing fun! Dodgems, dodgems!', imageUrl: 'assets/img/rides/dodgems.jpg', price: 3
    }),
    new DataCBModel({
      title: 'Go Carts',
      body: 'No bumping!', imageUrl: 'assets/img/rides/gocarts.jpg', price: 5
    }),
    new DataCBModel({
      title: 'Slide',
      body: 'Good ride, but the operator is grumpy so avoid if possible', imageUrl: 'assets/img/rides/slide.jpg', price: 2
    }),
    new DataCBModel({
      title: 'Beach Party',
      body: 'A swing for adults', imageUrl: 'assets/img/rides/beach_party.jpg', price: 2.5
    }),
    new DataCBModel({
      title: 'Gallopers',
      body: 'Something something', imageUrl: 'assets/img/rides/gallopers.jpg', price: 2
    }),
    new DataCBModel({
      title: 'Ghost Train',
      body: 'Very scary place. You won\'t be disappointed', imageUrl: 'assets/img/rides/ghost_train.jpg', price: 2
    }),
    new DataCBModel({
      title: 'Miami Madness',
      body: 'Best Ride in the park tbh', imageUrl: 'assets/img/rides/miami_madness.jpg', price: 2
    })
  ];
}
