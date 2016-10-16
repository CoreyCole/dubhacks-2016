import { Component } from '@angular/core';
import { FindService } from './find.service';
import { BackButtonService } from './back-button.service';

//import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [FindService, BackButtonService],
})
export class AppComponent {
  title = 'Find My Stuff';

   constructor (
      private _backButtonService: BackButtonService
   ) {}


  showBack() {
    // return this._location.path() === '/auth/add-server';
    return this._backButtonService.showBack();
  }

}
