import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-actionsheet',
  templateUrl: 'actionsheet.html',
})
export class ActionsheetPage {
  list: number[] = [1,12,3,4,]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActionsheetPage');
  }

}
