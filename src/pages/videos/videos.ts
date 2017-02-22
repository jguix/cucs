import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Jsonp, Http, Headers, RequestOptions } from '@angular/http';
import { Video } from '../../shared/data-model/video.model'
import { Observable } from 'rxjs';
import 'rxjs/operator/map';

@Component({
  selector: 'page-videos',
  templateUrl: 'videos.html'
})
export class VideosPage implements OnInit {
  private accessToken = '19120bbaf6646d270108f6ea074d0fe5';
  private apiUrl = 'https://api.vimeo.com';
  private fields = 'name,description,pictures.sizes,tags.name,uri,embed';

  videos = [
    {
      id: '198876930',
      title: 'Reggae por instrumentos'
    },
    {
      id: '198876893',
      title: 'Funky-maksum por instrumentos'
    },
    {
      id: '198876963',
      title: 'Timbalada por instrumentos'
    }
  ];

  iframes: any = [];

  constructor(
    public navCtrl: NavController,
    public platform: Platform,
    private jsonp: Jsonp,
    private http: Http) {

  }

  ngOnInit() {
    this.getVideos()
      .subscribe( (res) => console.log('Video: ' + JSON.stringify(res))); 
    // this.jsonp.request('https://vimeo.com/api/oembed.json?url=https%3A//vimeo.com/198876930&callback=JSONP_CALLBACK')
    //   .subscribe( (res) => console.log(JSON.stringify(res)));

    // Observable.from(this.videos)
    //   .flatMap( (video) => {
    //     let url = `https://vimeo.com/api/oembed.json?url=https%3A//vimeo.com/${video.id}&callback=JSONP_CALLBACK`;
    //     // _body.html
    //     return this.jsonp.request(url);
    //   })
    //   .map( (res: any) => {
    //     console.log('html: ' + res._body.html);
    //     this.iframes.push({html: res._body.html});
    //     console.log(JSON.stringify(this.iframes));
    //   })
    //   .subscribe();
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
  getVideos(): Observable<any> {
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
