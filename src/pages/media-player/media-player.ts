import { Component } from "@angular/core";
import { NavParams, Platform } from "ionic-angular";

@Component({
  selector: 'media-player',
  templateUrl: 'media-player.html'
})
export class MediaPlayer {

  title: string;
  embed: string;

  constructor(
    navParams: NavParams, 
    platform: Platform) {

    const maxWidth = platform.width() - 8;
    const id = navParams.get('id');
    this.title = navParams.get('title');
    const width = navParams.get('width');
    const height = navParams.get('height');
    const newHeight = height * maxWidth/width;
    this.embed = 
      `<iframe 
        src=\"https://player.vimeo.com/video/${id}?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0\" 
        width=\"${maxWidth}\" height=\"${newHeight}\" frameborder=\"0\" 
        title=\"${this.title}\" webkitallowfullscreen mozallowfullscreen allowfullscreen>
      </iframe>`;
  }
}

