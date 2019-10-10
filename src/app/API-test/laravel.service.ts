import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

export const BACKURL = 'http://backend.test/api/';
@Injectable()
export class LaravelService {
  constructor(private http: Http) { }

  getHistoryData() {

    return this.http.request(BACKURL + 'history');
  }
  getHistorySlidesData() {

    return this.http.request(BACKURL + 'historyslides');
  }
  getFindUsData() {

    return this.http.request(BACKURL + 'findus');
  }
  getNewsData() {

    return this.http.request(BACKURL + 'news');
  }
  getOpeningTimesData() {

    return this.http.request(BACKURL + 'openingtimes');
  }
  getProgramsData() {

    return this.http.request(BACKURL + 'programs');
  }
  getEventsData() {

    return this.http.request(BACKURL + 'events');
  }
  getRidesData() {

    return this.http.request(BACKURL + 'rides');
  }
  getHomeLinksData() {

    return this.http.request(BACKURL + 'homelinks');
  }
  getHomeSlidesData() {

    return this.http.request(BACKURL + 'homeslides');
  }
}
