import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { routing, appRoutingProviders }  from './app-routing.module';

import { AppComponent } from './app.component';
import { MainViewComponent } from './main-view/main-view.component';
import { AnalyticsViewComponent } from './analytics-view/analytics-view.component';
import { MaterialModule } from '@angular/material';
import { ItemViewComponent } from './item-view/item-view.component';
import {Dubhacks2016RoutingModule} from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    AnalyticsViewComponent,
    ItemViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //routing,
    Dubhacks2016RoutingModule,
    MaterialModule.forRoot()
  ],
providers: [], //appRoutingProviders
  bootstrap: [AppComponent]
})
export class AppModule { }
