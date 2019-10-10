import { NewsConstants } from './news.constants';
import { Component } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  newsConstants = NewsConstants;
  constructor(private fb: FacebookService) {
    this.initFacebook();
  }

  private initFacebook(): void {
    const initParams: InitParams = {
      xfbml: true,
      version: 'v2.8'
    };

    this.fb.init(initParams);
  }
}
