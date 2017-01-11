import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { VideoPlayer } from 'ionic-native';

@Component({
  selector: 'page-videos',
  templateUrl: 'videos.html'
})
export class VideosPage {

  constructor(
    public navCtrl: NavController,
    public platform: Platform) {

  }

  play(fileName) {
    let filePath: string;

    this.platform.ready().then(() => {
      if (this.platform.is('cordova')) {
        filePath = 'file:///android_asset/www/assets/video/' + fileName + '.mp4';
      } else {
        filePath = './assets/video/' + fileName + '.mp4';
      }
      console.log('Open video at ' + filePath);

      if (this.platform.is('cordova')) {
        // Playing a video.
        VideoPlayer.play(filePath).then(() => {
          console.log('video completed');
        }).catch(err => {
          console.log(err);
        });
      } else {
        window.open(filePath, '_blank');
      }
    });

  }

}
