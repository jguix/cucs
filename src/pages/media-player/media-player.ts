import { Component } from "@angular/core";
import { NavParams } from "ionic-angular";

@Component({
  selector: 'media-player',
  templateUrl: 'media-player.html'
})
export class MediaPlayer {

  title: string;
  embed: string;

  constructor(navParams: NavParams) {
    this.title = navParams.get('title');
    this.embed = navParams.get('embed');
    console.log('Title: ' + this.title);
    console.log('Embed: ' + this.embed);
  }
}

