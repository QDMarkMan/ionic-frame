import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { NewsPage } from '../news/news'
import { LoginPage } from './../login/login'

/**
 * Generated class for the MessagePage page.
 */
interface Message {
  url: string,
  name: string
}
@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {
  messages: Message[] = []
  param: any
  page: any
  constructor(public navCtrl: NavController, public navParams: NavParams, public event: Events) {
    this.page = NewsPage
    this.param = {
      name: 'demo',
      title: '传参'
    }
    // 订阅event事件
    event.subscribe('user:login', (data) => {
      /* console.log(this)
      console.log(data) */
      let obj = {
        url: 'assets/imgs/logo.png',
        name: data.username
      }
      this.messages.push(obj)
    })
  }
  goNews () {
    this.navCtrl.push(NewsPage, {
      title : '测试传参'
    })
  }
  // 跳转登录
  goLogin (){
    this.navCtrl.push(LoginPage, {
      title: '登录'
    })
  }
  ionViewDidLoad() {
    for (let index = 0; index < 10; index++) {
      let obj = {
        url: 'assets/imgs/logo.png',
        name: `message${index}`
      }
      this.messages.push(obj)
    }
    console.log('ionViewDidLoad MessagePage');
  }

}
