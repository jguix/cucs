import { Component } from '@angular/core';
import { ManifestPage, ScoresPage, VideosPage, TecnicaPage } from '../../pages';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = VideosPage;
  tab2Root: any = TecnicaPage;
  tab3Root: any = ScoresPage;
  tab4Root: any = ManifestPage;

  constructor() {

  }
}
