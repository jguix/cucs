import { Component } from '@angular/core';
import { DocumentsPage, VideosPage, TechniquePage } from '../../pages';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = VideosPage;
  tab2Root: any = TechniquePage;
  tab3Root: any = DocumentsPage;

  constructor() {

  }
}
