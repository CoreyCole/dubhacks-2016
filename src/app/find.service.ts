import { Injectable } from '@angular/core';
import { MyItem } from './my-item'

@Injectable()
export class FindService {

  private myItems: MyItem[] = [
    new MyItem('phone', 2, 'http://s.tmocache.com/content/dam/tmo/en-p/cell-phones/apple-iphone-6s/rose-gold/stills/browse-apple-iphone-6s-rose-gold.jpg/_jcr_content/renditions/cq5dam.web.280.280.jpeg', ['table', 'flower', 'painting']),
    new MyItem('bottle', 0, 'http://www.gocontigo.com/media/catalog/product/cache/19/small_image/400x/9df78eab33525d08d6e5fb8d27136e95/m/o/monaco_cortland_back_2.jpg', []),
    new MyItem('medication', 4, 'http://www.adultmeducation.com/images/Overview.jpg', [])
  ]

  constructor() {

  }

  getItems() {
    return this.myItems;
  }

  getSelectedItem(index: number) {
    return this.myItems[index];
  }

}
