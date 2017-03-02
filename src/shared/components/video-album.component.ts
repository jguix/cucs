import {Component, OnInit, Input} from '@angular/core';
import { App, NavController, Platform } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Video } from '../../shared/data-model/video.model'
import { MediaPlayer } from '../../pages';
import { Observable } from 'rxjs';
import 'rxjs/operator/map';

@Component({
  selector: 'video-album',
  templateUrl: 'video-album.template.html'
})
export class VideoAlbumComponent implements OnInit {
  @Input() id;
  private accessToken = '19120bbaf6646d270108f6ea074d0fe5';
  private apiUrl = 'https://api.vimeo.com';
  private fields = 'name,description,pictures.sizes,tags.name,uri,width,height';
  private videos: Video[] = [];

  constructor(
    public appCtrl: App,
    public navCtrl: NavController,
    public platform: Platform,
    private http: Http) {

  }

  ngOnInit() {
    console.log('Video id: ' + this.id);
    this.getVideos().subscribe((video) => this.videos.push(video));
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
    return this.http.get(`${this.apiUrl}/me/albums/${this.id}/videos?fields=${this.fields}`, options)
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
