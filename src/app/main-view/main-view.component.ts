import { Component, OnInit } from '@angular/core';
import { MyItem } from '../my-item';
import { FindService } from '../find.service';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs/Rx";

import {Geolocation} from 'ionic-native';


@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.sass']
})


export class MainViewComponent implements OnInit {
  private myItems: MyItem[] = [];
  private subscription: Subscription;

  constructor(private findService: FindService, 
              private router: Router
              ) {}
              //private route: ActivatedRoute

  ngOnInit() {
    this.myItems = this.findService.getItems();
    //  this.subscription = this.route.params.subscribe(
    //    (params: any) => {
    //      this.myItems = this.findService.getItems();
    //    }
    //  );
    Geolocation.getCurrentPosition().then(pos => {
      console.log('lat: ' + pos['coords'].latitude + ', lon: ' + pos['coords'].longitude);
    });

    let watch = Geolocation.watchPosition().subscribe(pos => {
      console.log('lat: ' + pos['coords'].latitude + ', lon: ' + pos['coords'].longitude);
    });
  }


  findClickedItem(selectedIndex: number) {
    console.log(selectedIndex);
    //this.router.navigate(['/item-view', 2, 'edit']);
    this.router.navigate(['/edit', selectedIndex]);
  }

}
