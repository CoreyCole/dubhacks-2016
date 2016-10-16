import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Injectable()
export class BackButtonService {

  constructor(
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  showBack() {
    return true;
    // if (this._router.url.indexOf("/edit/") > -1) {
    //   return true;
    // } else {
    //   return false;
    // }
  }
}
