import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FileOpener } from 'ionic-native';

@Component({
  selector: 'page-scores',
  templateUrl: 'scores.html'
})
export class ScoresPage {

  constructor(
    public navCtrl: NavController) {

  }

  openPDF(fileName: string) {
    let filePath = './assets/doc/' + fileName + '.pdf';
    FileOpener.open(filePath, 'application/pdf')
  }

}
