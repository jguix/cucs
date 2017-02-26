import { NgModule, ErrorHandler } from '@angular/core';
import { JsonpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {
  DocumentsPage,
  ManifestPage,
  ScoresPage,
  TabsPage,
  TecnicaPage,
  VideosPage
} from '../pages';

@NgModule({
  declarations: [
    DocumentsPage,
    MyApp,
    ManifestPage,
    ScoresPage,
    TabsPage,
    TecnicaPage,
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
    TecnicaPage,
    VideosPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
