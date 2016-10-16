import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs/Rx";
import { MyItem } from '../my-item';
import { FindService } from '../find.service';


@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.sass']
})
export class ItemViewComponent implements OnInit {
  private subscription: Subscription;
  private itemIndex: number;
  private selectedItem: MyItem;

  constructor(private route: ActivatedRoute,
              private findService: FindService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.itemIndex = params['id'];
        this.selectedItem = this.findService.getSelectedItem(this.itemIndex);
      }
    );
  }

}
