import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { File, FileOpener } from 'ionic-native';

declare var cordova: any;

@Component({
  selector: 'page-scores',
  templateUrl: 'scores.html'
})
export class ScoresPage {

  constructor(
    public navCtrl: NavController,
    public platform: Platform) {

  }

  openPDF(fileName: string) {
    let filePath: string;

    this.platform.ready().then(() => {
      if (this.platform.is('cordova')) {
        filePath = `${cordova.file.applicationDirectory}www/doc/${fileName}.pdf`;
        // filePath = 'file:///android_asset/www/assets/doc/' + fileName + '.pdf';
        // File.resolveLocalFilesystemUrl(filePath)
        //   .then((res) => {
        //     console.log('Resolved path: ', res);
        //   });
        // filePath = '/www/assets/doc/' + fileName + '.pdf';
      } else {
        filePath = './assets/doc/' + fileName + '.pdf';
      }
      console.log('Open file at ' + filePath);

      if (this.platform.is('cordova')) {
        FileOpener.open(filePath, 'application/pdf')
          .then((res) => {
            console.log('file opened successfully');
          }).catch((err) => {
          console.log('Error status: ' + err.status + ' - Error message: ' + err.message);
        });
      } else {
        window.open(filePath, '_blank');
      }
    });
  }

}
