import { LoginService } from './../../logic-service/login.service';
import {HttpService} from './../../service/http.service'
import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams ,LoadingController, ToastController, Events } from 'ionic-angular'
import { TokenServie } from '../../service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  userName: string = 'demo'
  password: string = '123456'

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public loadingCtrl: LoadingController,
    public toastController: ToastController,
    public tokenService: TokenServie,
    public httpService: HttpService,
    public event: Events,
    private loginService: LoginService
    ) {
      
  }

  doLogin () {
    const para = {
      username: this.userName,
      password:  this.password
    }
    const loader = this.loadingCtrl.create({
      content: "Please wait..."
    })
    loader.present()
    this.httpService.post('/loginBend/doLogin', para).then(res => {
      loader.dismiss()
      let message:string = 'Success' 
      if (res.succeed) {
        this.tokenService.seToken(res.data)
      } else {
        message = res.message
      }
      console.log(res)
      // 生成toast
      const toast = this.toastController.create({
        message: message,
        duration: 3000,
        position: 'top'
      })
      toast.present()
    }).catch(err => {
      loader.dismiss()
      console.log(err)
    })
    /* setTimeout(() => {
      console.log(this.storageService.getStorage('user'))
      loader.dismiss()
      this.navCtrl.pop()
    }, 3000) */
  }

  newDoLogin () {
    const para = {
      username: this.userName,
      password:  this.password
    }
    this.submitEvent(para) // events
    this.loginService.loginByUsername(para).then((result) => {
      console.log(result)
    }).catch((err) => {
      console.log(err)
    })
  }
  // 发布event事件
  submitEvent (data) {
    console.log(1)
    this.event.publish('user:login', data)
  }
  // 声明周期
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
