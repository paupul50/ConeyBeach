import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import { LaravelService } from '../laravel.service';
import { Post } from '../post.model';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {
title: string;
body: string;
  imageSources = ['assets/img/history/h1.jpg', 'assets/img/history/h2.jpg', 'assets/img/history/h3.jpg'];
  constructor(private http: LaravelService) { 
    this.body="Body";
    this.title="Title"
    // this.http.getHistoryData().subscribe((response: any)=>{
    //   console.log(response.json());
    //   this.title = response.json().history.title;
    //   this.body = response.json().history.body;
    // });
    
  } 
}