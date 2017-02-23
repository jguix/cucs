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
  }

}
