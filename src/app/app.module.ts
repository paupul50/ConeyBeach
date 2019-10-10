import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';


import { FacebookModule } from 'ngx-facebook';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OpeningTimesComponent } from './opening-times/opening-times.component';
import { RidesPricesComponent } from './rides-prices/rides-prices.component';
import { NewsComponent } from './news/news.component';
import { FindUsComponent } from './find-us/find-us.component';
import { HistoryComponent } from './history/history.component';
import { EventsComponent } from './events/events.component';
import { ProgramsComponent } from './programs/programs.component';
import { CarouselComponent } from './carousel/carousel.component';
import { LocationStrategy, HashLocationStrategy, PathLocationStrategy } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LaravelService } from './API-test/laravel.service';
import { SlideshowModule } from 'ng-simple-slideshow';
import { OpeningTimeComponent } from './opening-times/opening-time/opening-time.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'opening', component: OpeningTimesComponent },
  { path: 'rides', component: RidesPricesComponent },
  { path: 'news', component: NewsComponent },
  { path: 'contacts', component: FindUsComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'events', component: EventsComponent },
  { path: 'programs', component: ProgramsComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OpeningTimesComponent,
    RidesPricesComponent,
    NewsComponent,
    FindUsComponent,
    HistoryComponent,
    EventsComponent,
    ProgramsComponent,
    CarouselComponent,
    FooterComponent,
    NavbarComponent,
    OpeningTimeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule, RouterModule.forRoot(routes),
    FacebookModule.forRoot(),
    HttpModule,
    SlideshowModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    LaravelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
