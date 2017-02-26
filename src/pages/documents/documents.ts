import { Component } from '@angular/core';
import { LoadingController, NavController, Platform } from 'ionic-angular';
import { FileOpener, Toast, Transfer } from 'ionic-native';
import { ScoresPage, ManifestPage } from '../index';
import { Observable } from 'rxjs';

declare var cordova: any;

@Component({
  selector: 'page-documents',
  templateUrl: 'documents.html'
})
export class DocumentsPage {

  constructor(
    public loadingCtrl: LoadingController,
    public navCtrl: NavController,
    public platform: Platform) {

  }

  goToScores() {
    this.navCtrl.push(ScoresPage);
  }

  goToManifest() {
    this.navCtrl.push(ManifestPage);
  }

  openLocalPDF(fileName: string, cachedir?: string) {
    if (!this.platform.is('mobile')) {
      window.open('./assets/doc/' + fileName + '.pdf', '_blank');
    } else {
      const filePath = `cdvfile://localhost/assets/www/assets/doc/${fileName}.pdf`;
      // In case of not cordova
      this.presentLoading('Abriendo PDF...');
      this.openPDF(filePath, cachedir);
    }
  }

  private openPDF(filePath: string, cachedir?: string) {
    Observable.of(cachedir)
      .flatMap(cachedir => {
        console.log('Cache dir: ' + cachedir);

        if (cachedir != null) {
          switch (cachedir) {
            case 'external': cachedir = cordova.file.externalCacheDirectory; break;
            default: cachedir = cordova.file.cacheDirectory;
          }
          // Return cachedPath
          return this.cacheFile(filePath, cachedir);
        } else {
          // Return original filePath
          return Observable.of(filePath);
        }
      })
      .map( (filePath) => {
        console.log('Final path: ' + filePath);
        return this.openFile(filePath, 'application/pdf');
      })
      // .catch(error => Observable.of(`Something went wrong, check your network connection. Error: ${error}`))
      .subscribe();
  }

  /**
   * Open file with FileOpen plugin
   * Converts from promise to observable, for convenience
   * @param filePath
   * @returns {Observable<T>}
   */
  private openFile(filePath: string, mimetype: string = 'application/pdf'): Observable<void> {
    return Observable.fromPromise(FileOpener.open(filePath, mimetype))
      .do( () => {
        this.log('File opened successfully');
      }, (err) => {
        this.log('Error status: ' + err.status + ' - Error message: ' + err.message);
      });
  }

  /**
   * Create copy of a file to some cache directory
   * It is used because FileOpener can't work with some internal directories or external paths
   * @param filePath
   * @param fs
   * @returns {Observable<R>}
   */
  private cacheFile(filePath: string, fs: string = cordova.file.cacheDirectory): Observable<string> {
    const fileTransfer = new Transfer();
    console.log('Caching file: ' + filePath + ' at fs: ' + fs);

    return Observable.fromPromise(fileTransfer.download(filePath, fs + 'file.pdf'))
      .map((entry) => {
        const cachedPath = entry.toURL();
        console.log('download complete: ' + cachedPath);
        return cachedPath;
      });
  }

  /**
   * Log to console and present toast message
   * @param message
   * @param duration
   */
  private log(message: string, duration: string = 'short') {
    console.log(message);
    Toast.show(message, duration, 'center').subscribe();
  }

  /**
   * Just a loading control with a warning message
   * @param message
   * @param duration
   */
  private presentLoading(message: string, duration: string = 'short') {
    let time: number = 1000;
    switch (duration) {
      case 'short': time = 1000; break;
      case 'long': time = 5000; break;
      default: try { time = parseInt(duration) } catch(err) { /* keep default value */ }
    }

    let loading = this.loadingCtrl.create({
      content: message
    });

    console.log(message);
    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, time);
  }

}
