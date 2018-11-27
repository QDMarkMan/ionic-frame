import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }
  /**
   * 展示弹窗
   */
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Hello',
      subTitle: 'welconme ionic',
      buttons: ['OK','Cancel']
    })
    alert.present()
  }
}
