import { NgModule, ErrorHandler } from '@angular/core';
import { JsonpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {
  DocumentsPage,
  ManifestPage,
  ScoresPage,
  TabsPage,
  TechniquePage,
  VideosPage
} from '../pages';

@NgModule({
  declarations: [
    DocumentsPage,
    MyApp,
    ManifestPage,
    ScoresPage,
    TabsPage,
    TechniquePage,
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
