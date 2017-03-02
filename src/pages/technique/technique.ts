import { Component, OnInit } from '@angular/core';
import { App, NavController, Platform } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Video } from '../../shared/data-model/video.model'
import { Observable } from 'rxjs';
import 'rxjs/operator/map';
import {MediaPlayer} from "../media-player/media-player";

@Component({
  selector: 'page-technique',
  templateUrl: 'technique.html'
})
export class TechniquePage implements OnInit {
  private accessToken = '19120bbaf6646d270108f6ea074d0fe5';
  private apiUrl = 'https://api.vimeo.com';
  private fields = 'name,description,pictures.sizes,tags.name,uri,width,height';
  private videos: Video[] = [];

  constructor(
    public appCtrl: App,
    public navCtrl: NavController,
    public platform: Platform,
    private http: Http) {
    this.getVideos().subscribe((video) => this.videos.push(video));
  }

  ngOnInit() {

  }

  watchVideo(video: Video) {
    console.log('Let\'s watch video: ' + JSON.stringify(video));
    const navParams = {
      id: video.id,
      title: video.title,
      width: video.width,
      height: video.height
    };
    this.appCtrl.getRootNav().push(MediaPlayer, navParams);
  }

  /**
   * Video properties
   * - name
   * - description
   * - embed
   * - pictures
   * - tags
   * - uri
   */
  getVideos(): Observable<Video> {
    let headers = new Headers({ 'Accept': 'application/json' });
    headers.append('Authorization', `Bearer ${this.accessToken}`);

    let options = new RequestOptions({ headers: headers });
    return this.http.get(`${this.apiUrl}/me/albums/4393807/videos?fields=${this.fields}`, options)
      .map(res => res.json().data)
      .flatMap((video, index) => video)
      .map((video: any): Video => {
        const tags = video.tags.map((tag) => tag.name);
        return {
          id: video.uri.replace('/videos/',''),
          title: video.name,
          description: video.description,
          width: video.width,
          height: video.height,
          tags: tags,
          thumbnail: {
            width: video.pictures.sizes[1].width,
            height: video.pictures.sizes[1].height,
            src: video.pictures.sizes[1].link
            }
        }
      });

  }

}
