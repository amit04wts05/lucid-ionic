import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { LoadingController } from '@ionic/angular';

@Injectable()
export class LoaderService {
  constructor(public loadingController: LoadingController) { }

  private _loading: boolean = false;
  private _blog: boolean = false;
  loadingStatus: Subject<any> = new Subject();
  blogData: Subject<any> = new Subject();
  loaderData: HTMLIonLoadingElement;
  get loading(): boolean {
    return this._loading;
  }


  // simpleLoader() {
  //   this.loadingController
  //     .create({
  //       message: 'Please...',
  //     })
  //     .then((response) => {
  //       response.present();
  //     });
  // }

  // remove() {
  //   setTimeout(() => {
  //     this.dismissLoader()
  //   }, 200)
  // }

  // Dismiss loader
  // dismissLoader() {
  //   this.loadingController
  //     .dismiss()
  //     .then((response) => {
  //       console.log('Loader closed!', response);
  //     })
  //     .catch((err) => {
  //       console.log('Error occured : ', err);
  //     });
  // }

  set loading(value) {
    this._loading = value;
    this.loadingStatus.next(value);
  }


  async simpleLoader() {
  //  await this.dismissLoader();
// console.log("load loader");
    this.loaderData = await this.loadingController.create({

      // duration: 2000,
      spinner:'lines-small',

      backdropDismiss: true,


    });
  await   this.loaderData.present();

  }
  async dismissLoader() {
    // console.log("dismiss loader");

    // while (await this.loadingController.getTop() !== undefined) {
    //   await this.loadingController.dismiss();
    // }



    try{
     await  this.loaderData.dismiss();

    }catch(e){

    }

  }

  startLoading() {

    this.loading = true;
  }

  stopLoading() {
    this.loading = false;
  }


}
