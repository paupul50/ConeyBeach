import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

export const CBURL: string = "http://backend.test/api/";
@Injectable()
export class LaravelService {
  constructor(public http: Http) { }

  getHistoryData(){

    return this.http.request('http://backend.test/api/history');
  }
  getHistorySlidesData() {

    return this.http.request('http://backend.test/api/historyslides');
  }
  getFindUsData() {

    return this.http.request('http://backend.test/api/findus');
  }
  getNewsData() {

    return this.http.request('http://backend.test/api/news');
  }
  getOpeningTimesData() {

    return this.http.request('http://backend.test/api/openingtimes');
  }
  getProgramsData() {

    return this.http.request('http://backend.test/api/programs');
  }
  getEventsData() {

    return this.http.request('http://backend.test/api/events');
  }
  getRidesData() {

    return this.http.request('http://backend.test/api/rides');
  }
  getHomeLinksData() {

    return this.http.request('http://backend.test/api/homelinks');
  }
  getHomeSlidesData() {

    return this.http.request('http://backend.test/api/homeslides');
  }
}
