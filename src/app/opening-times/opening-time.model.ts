export class OpeningTimeModel {
  day: string;
  time: string;
  body: string;
  bodyEvent: string;

  constructor(openingTime: Partial<OpeningTimeModel>) {
    Object.assign(this, openingTime);
  }
}
