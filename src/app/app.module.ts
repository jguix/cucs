import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage, ManifestPage, ScoresPage, VideosPage } from '../pages';

@NgModule({
  declarations: [
    MyApp,
    ManifestPage,
    ScoresPage,
    TabsPage,
    VideosPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ManifestPage,
    ScoresPage,
    TabsPage,
    VideosPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
