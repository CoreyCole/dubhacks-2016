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

  constructor(private router: ActivatedRoute,
    private findService: FindService) { }

  ngOnInit() {
    this.subscription = this.router.params.subscribe(
      (params: any) => {
        this.itemIndex = params['id'];
        this.selectedItem = this.findService.getSelectedItem(this.itemIndex);
      }
    );
  }

//   foundItem() {
//     console.log('camera loads');
//     //this.router.navigate(['']); // load camera screen?

//     // Grab elements, create settings, etc.
//     var video = document.getElementById('video');

//     // Get access to the camera!
//     if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
//       // Not adding `{ audio: true }` since we only want video now
//       navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
//         video.src = window.URL.createObjectURL(stream);
//         video.play();
//       });

//     }

//     // Elements for taking the snapshot
//       var canvas = document.getElementById('canvas');
//       var context = canvas.getContext('2d');
//       var video = document.getElementById('video');

//     // Trigger photo take
//     document.getElementById("snap").addEventListener("click", function () {
//       console.log("snapped!");
//       context.drawImage(video, 0, 0, 640, 480);
//     });


//   }



// 

}
