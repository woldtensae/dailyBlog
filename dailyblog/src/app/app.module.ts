
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { myRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AngularComponent } from './angular/angular.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AngularComponent
  ],
  imports: [
    BrowserModule,
    myRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
