import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';
import * as $ from 'jquery';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  //DI for FaceBook
  constructor(private fb: FacebookService) { 
    let initParams: InitParams = {
      xfbml: true,
      version: 'v2.8'
    };

    fb.init(initParams);
  }

  refreshPage() {
    window.location.reload();
  }
}
