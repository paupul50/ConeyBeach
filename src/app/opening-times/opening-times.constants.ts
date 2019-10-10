import { OpeningTimeModel } from './opening-time.model';

export class OpeningTimesConstants {
  static readonly CurrentWeek = '2018/05/07';
  static readonly LastUpdatedWeek = '2018/05/06';
  static readonly OpeningTimes = [
    new OpeningTimeModel({
      day: 'Monday',
      time: '12:00-22:00',
      body: 'Editable text Editable text Editable text Editable text Editable text Editable text Editable'
        + 'text Editable text Editable text Editable text Editable text Editable text Editable text Editable text Editable text'
        + 'Editable text Editable text Editable text Editable text Editable text Editable text',
      bodyEvent: 'Costumes 13:00-16:00'
    }),
    new OpeningTimeModel({
      day: 'Tuesday',
      time: '12:00-22:00',
      body: 'Editable text Editable text Editable text Editable text Editable text Editable text Editable'
        + 'text Editable text Editable text Editable text Editable text Editable text Editable text Editable text Editable text'
        + 'Editable text Editable text Editable text Editable text Editable text Editable text',
      bodyEvent: 'Beach Running'
    }),
    new OpeningTimeModel({
      day: 'wednesday',
      time: '12:00-22:00',
      body: 'Editable text Editable text Editable text Editable text Editable text Editable text Editable'
        + 'text Editable text Editable text Editable text Editable text Editable text Editable text Editable text Editable text'
        + 'Editable text Editable text Editable text Editable text Editable text Editable text',
      bodyEvent: 'Beach Running'
    }),
    new OpeningTimeModel({
      day: 'Thursday',
      time: '12:00-22:00',
      body: 'Editable text Editable text Editable text Editable text Editable text Editable text Editable'
        + 'text Editable text Editable text Editable text Editable text Editable text Editable text Editable text Editable text'
        + 'Editable text Editable text Editable text Editable text Editable text Editable text',
      bodyEvent: 'Beach Running'
    }),
    new OpeningTimeModel({
      day: 'Friday',
      time: '12:00-22:00',
      body: 'Editable text Editable text Editable text Editable text Editable text Editable text Editable'
        + 'text Editable text Editable text Editable text Editable text Editable text Editable text Editable text Editable text'
        + 'Editable text Editable text Editable text Editable text Editable text Editable text',
      bodyEvent: 'Beach Running'

    }),
    new OpeningTimeModel({
      day: 'Saturday',
      time: '12:00-22:00',
      body: 'Editable text Editable text Editable text Editable text Editable text Editable text Editable'
        + 'text Editable text Editable text Editable text Editable text Editable text Editable text Editable text Editable text'
        + 'Editable text Editable text Editable text Editable text Editable text Editable text',
      bodyEvent: 'Beach Running'

    }),
    new OpeningTimeModel({
      day: 'Sunday',
      time: '12:00-22:00',
      body: 'Editable text Editable text Editable text Editable text Editable text Editable text Editable'
        + 'text Editable text Editable text Editable text Editable text Editable text Editable text Editable text Editable text'
        + 'Editable text Editable text Editable text Editable text Editable text Editable text',
      bodyEvent: 'Beach Running'
    })
  ];
}
