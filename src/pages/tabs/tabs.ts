import { Component } from '@angular/core';
import { ManifestPage, ScoresPage, VideosPage } from '../../pages';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = VideosPage;
  tab2Root: any = ScoresPage;
  tab3Root: any = ManifestPage;

  constructor() {

  }
}
