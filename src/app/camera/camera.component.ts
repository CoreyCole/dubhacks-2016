import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.sass']
})
export class CameraComponent implements OnInit {
  private videoasdf: any

  constructor(private router: Router) { }

  ngOnInit() {
    var video = this.videoasdf = document.querySelector("#videoElement");
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
 
    if (navigator.getUserMedia) {       
        navigator.getUserMedia({video: true}, handleVideo, videoError);
    }
    
    function handleVideo(stream) {
        video['src'] = window.URL.createObjectURL(stream);
        this.videoasdf = window.URL.createObjectURL(stream);
    }
    
    function videoError(e) {
        // do something
    }
  }

  takePhoto() {
    // navigator.mediaDevices.getUserMedia({ audio: false, video: true })
    //   .then(function(data) {
    //     console.log(data);
    //   });
    this.router.navigate(['main-view']);
  }
  

  
}
