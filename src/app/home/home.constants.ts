import { DataCBModel } from '../API-test/dataCB.model';

export class HomeConstants {
  static readonly HomeItems = [
    new DataCBModel({
      title: 'News', body: 'What\'s going on',
      imageUrl: 'assets/img/news.jpg', price: 0, other: '/news'
    }),
    new DataCBModel({
      title: 'Find Us', body: 'This is how you find us',
      imageUrl: 'assets/img/find_us.jpg', price: 0, other: '/findus'
    }),
    new DataCBModel({
      title: 'History', body: 'What we are and our history',
      imageUrl: 'assets/img/history.jpg', price: 0, other: '/history'
    }),
    new DataCBModel({
      title: 'Exciting Rides', body: 'Some message about why you should come and have a ride here.',
      imageUrl: 'assets/img/carousel/c1.jpg', price: 0, other: '/rides'
    }),
    new DataCBModel({
      title: 'Memorable Events', body: 'Yearly events and something you should look forward to.',
      imageUrl: 'assets/img/carousel/c2.jpg', price: 0, other: '/events'
    }),
    new DataCBModel({
      title: 'Programs', body: 'Want to meet space guy or minions? Like huge discounts? Check out our programs!',
      imageUrl: 'assets/img/carousel/c3.jpg', price: 0, other: '/programs'
    }),
  ];
}
