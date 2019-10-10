import { DataCBModel } from '../API-test/dataCB.model';

export class EventsConstants {
  static readonly Events = [
    new DataCBModel({ title: 'Elvis festival', body: 'Some sort of one time a year festival', imageUrl: 'assets/img/events/elvis.jpg' }),
    new DataCBModel({ title: 'Donkey riding', body: 'These are donkeys. Not horses', imageUrl: 'assets/img/events/donkeys.jpg' }),
    new DataCBModel({ title: 'Beach Running', body: 'Fun and exciting active rest', imageUrl: 'assets/img/events/beach_running.jpg' }),
  ];
}
