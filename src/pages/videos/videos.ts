import { Component, OnInit } from '@angular/core';
import 'rxjs/operator/map';

@Component({
  selector: 'page-videos',
  templateUrl: 'videos.html'
})
export class VideosPage implements OnInit {
  albumId: string;

  constructor() {
    this.albumId = '4380124';
    console.log('Album id: ' + this.albumId);
  }

  ngOnInit() {
  }

}
