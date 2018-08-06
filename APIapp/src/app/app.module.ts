import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UnsplashSearchComponent } from './unsplash-search/unsplash-search.component';

@NgModule({
  declarations: [
    AppComponent,
    UnsplashSearchComponent
  ],
  imports: [
    BrowserModule
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
