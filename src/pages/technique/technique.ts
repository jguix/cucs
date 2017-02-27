import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Video } from '../../shared/data-model/video.model'
import { Observable } from 'rxjs';
import 'rxjs/operator/map';

@Component({
  selector: 'page-technique',
  templateUrl: 'technique.html'
})
export class TechniquePage implements OnInit {
  private accessToken = '19120bbaf6646d270108f6ea074d0fe5';
  private apiUrl = 'https://api.vimeo.com';
  private fields = 'name,description,pictures.sizes,tags.name,uri,embed';
  private videos: Video[] = [];

  constructor(
      public navCtrl: NavController,
      public platform: Platform,
      private http: Http) {
          this.getVideos().subscribe((video) => this.videos.push(video));
  }

  ngOnInit() {

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
          name: video.name,
          description: video.description,
          tags: tags,
          thumbnail: {
            width: video.pictures.sizes[1].width,
            height: video.pictures.sizes[1].height,
            src: video.pictures.sizes[1].link,
            },
          uri: video.uri,
          embed: video.embed.html
        }
      });

  }

}
