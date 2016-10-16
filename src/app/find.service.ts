import { Injectable } from '@angular/core';
import { MyItem } from './my-item';

import { Http } from '@angular/http';
import { Observable } from "rxjs/Rx";

@Injectable()
export class FindService {
  private baseUrl: String = 'http://ec2-54-201-141-120.us-west-2.compute.amazonaws.com:3000';
  private myItems: MyItem[] = [
    new MyItem('phone', 2, 'http://s.tmocache.com/content/dam/tmo/en-p/cell-phones/apple-iphone-6s/rose-gold/stills/browse-apple-iphone-6s-rose-gold.jpg/_jcr_content/renditions/cq5dam.web.280.280.jpeg', ['table', 'flower', 'painting']),
    new MyItem('bottle', 0, 'http://www.gocontigo.com/media/catalog/product/cache/19/small_image/400x/9df78eab33525d08d6e5fb8d27136e95/m/o/monaco_cortland_back_2.jpg', []),
    new MyItem('medication', 4, 'http://www.adultmeducation.com/images/Overview.jpg', [])
  ];
  public userPhone: String = '2012453660';
  public items: any;

  constructor(private http: Http) {
    console.log('here');
    // http.get(this.baseUrl + '/api/v1/items/' + this.userPhone).map((data) => {
    //   console.log(data);
    // }).catch((err) => {
    //   console.error(err);
    //   return Observable.throw(err);
    // });
    this.newItemHistory("5803833812684906e41cf036", 'asdf', 'asdf', 'https://images-na.ssl-images-amazon.com/images/G/01/img15/pet-products/small-tiles/30423_pets-products_january-site-flip_3-cathealth_short-tile_592x304._CB286975940_.jpg');
    http.get(this.baseUrl + '/api/v1/items/' + this.userPhone).map(res => res.text()).subscribe(
      data => this.items = data,
      err => this.logError(err),
      () => console.dir(JSON.parse(this.items))
    )
  }

  logError(err) {
    console.error('There was an error: ' + err);
  }

  getItems() {
    return this.myItems;
  }

  getSelectedItem(index: number) {
    return this.myItems[index];
  }

  newItem(userPhone: String, itemName: String, beaconId: String) {
    this.http.post(this.baseUrl + '/api/v1/item/new', {
      userPhone: userPhone, itemName: itemName, beaconId: beaconId
    }).map(res => res.text()).subscribe(
      data => data,
      err => this.logError(err)
    );
  }

  newItemHistory(itemId: String, startedLookingTime: String, foundTime: String, photoUrl: String) {
    this.http.post(this.baseUrl + '/api/v1/items/' + itemId + '/history/new', {
      startedLookingTime: startedLookingTime, foundTime: foundTime, photoUrl: photoUrl
    }).map(res => res.text()).subscribe(
      data => data,
      err => this.logError(err)
    );
  }

}
