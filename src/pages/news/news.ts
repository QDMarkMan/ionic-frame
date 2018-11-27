import { MissionService } from './../../service/mission.service';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BacktopComponent } from './../../components/backtop/backtop';
/**
 * Generated class for the NewsPage page.
 */
@IonicPage()
@Component({
  //为页面指定选择器的名称
  //在ionic 3.x中规范为 page- 开头，为了不造成混乱，需要保持每个页面selector的唯一性
  //可以直接通过templateUrl 来引用html,而不直接使用template
  //模板的字符串，里面其实就是html代码
  //template: `<h1>Hello World!</h1>`
  //可以直接通过templateUrl 来引用html,而不直接使用template
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  messgeByEvent: String
  titleName: String = ''
  para: any
  father: number = 1 // 父组件数据
  //定义子组件数据
  @ViewChild(BacktopComponent)
  private childComponent: BacktopComponent

  //NavController就是用来管理和导航页面的一个controller
  constructor(public navCtrl: NavController, public navParams: NavParams, public missionService: MissionService) {
    // 通过NavParams get方法获取到单个对象
    this.titleName = navParams.get('name')
    // 直接获取所有的参数
    this.para = navParams.data
    // 通过Events 模块高级通信
    this.missionService.serviceEvent.subscribe((msg: string) => {
      this.messgeByEvent = msg
    })


  }
  // 接收儿子组件得来得值 并把儿子得值赋给父亲
  childCome (data: number) {
    this.father =  data
  }
  // 通过service的订阅提交信息
  emitByService () {
    this.missionService.statusMission('emitByService')
  }
  /**
   * Ionic生命周期函数
   */
  ionViewDidLoad() {
    console.log(this.titleName)
    console.log(this.para)
    console.log('ionViewDidLoad NewsPage');
    // 父组件数据更改
    setTimeout(() => {
      this.father ++ 
      // 通过child调用子组件方法
      this.childComponent.formChildView()
      // 调用修改service中的数据 这个时候父子组件中的service都会改变
      this.missionService.familyData = 'change familyData'
    }, 2000)
  }

}
