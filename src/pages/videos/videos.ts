import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Jsonp } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/operator/map';

@Component({
  selector: 'page-videos',
  templateUrl: 'videos.html'
})
export class VideosPage implements OnInit {

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
    private jsonp: Jsonp) {

  }

  ngOnInit() {
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

}
