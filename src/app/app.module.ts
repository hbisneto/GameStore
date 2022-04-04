import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { FooterComponent } from './footer/footer.component';
import { MostPlayedComponent } from './most-played/most-played.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationbarComponent,
    FooterComponent,
    MostPlayedComponent,
    LatestNewsComponent,
    ScrollTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
