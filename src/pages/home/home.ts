import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * 主页
 */
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  des:String = 'this is Home page'
  getItems(event:Object){
    console.log(event)
  }
  constructor(public navCtrl: NavController) {
    // this.navCtrl.push(LoginPage)
  }

}
