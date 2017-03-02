import { NgModule, ErrorHandler } from '@angular/core';
import { JsonpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
// Pages
import {
  DocumentsPage,
  ManifestPage,
  MediaPlayer,
  ScoresPage,
  TabsPage,
  TechniquePage,
  VideosPage
} from '../pages';
// Components
import {VideoAlbumComponent} from "../shared/components/video-album.component";
// Pipes
import {SafePipe} from "../pages/media-player/safe.pipe";

@NgModule({
  declarations: [
    DocumentsPage,
    MyApp,
    ManifestPage,
    MediaPlayer,
    SafePipe,
    ScoresPage,
    TabsPage,
    TechniquePage,
    VideoAlbumComponent,
    VideosPage
  ],
  imports: [
    JsonpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DocumentsPage,
    ManifestPage,
    MediaPlayer,
    ScoresPage,
    TabsPage,
    TechniquePage,
    VideosPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
