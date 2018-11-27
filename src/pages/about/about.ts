import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import F2 from '@antv/f2'
const data = [
  { genre: 'Sports', sold: 275 },
  { genre: 'Strategy', sold: 115 },
  { genre: 'Action', sold: 120 },
  { genre: 'Shooter', sold: 350 },
  { genre: 'Other', sold: 150 },
]
@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {
    console.log('触发构造函数')
  }
  /**
   * 关于Ionic3.X的声明
   */

  /**
   * 页面加载完成触发，这里的“加载完成”指的是页面所需的资源已经加载完成，但还没进入这个页面的状态（用户看到的还是上一个页面）。全程只会调用一次
   */
  ionViewDidLoad () {
    console.log(`Ionic触发ionViewDidLoad`);
    // Step 1: 创建 Chart 对象
    const chart = new F2.Chart({
      id: 'myChart',
      pixelRatio: window.devicePixelRatio // 指定分辨率
    })
    // Step 2: 载入数据源
    chart.source(data)
    chart.interval().position('genre*sold').color('genre')
    chart.render()
  }
  /**
   * 即将进入Ionic视图  这时对页面的数据进行预处理 每次都会触发
   */
  ionViewWillEnter(){
    console.log(`Ionic触发ionViewWillEnter`)
  }
  /**
   * 已经进入Ionic视图 每次都会触发
   */
  ionViewDidEnter(){
    console.log(`Ionic触发ionViewDidEnter`)
  }
  /**
   * 页面即将 (has finished) 离开时触发 每次都会触发
   */
  ionViewWillLeave(){
    console.log(`Ionic触发ionViewWillLeave`)
  }
  /**
   * 页面已经 (has finished) 离开时触发，页面处于非激活状态了。 每次都会触发
   */
  ionViewDidLeave(){
    console.log(`Ionic触发ionViewDidLeave`)
  }
  /**
   * 页面中的资源即将被销毁 一般用处不大
   */
  ionViewWillUnload(){
    console.log(`Ionic触发ionViewWillUnload`)
  }
  //守卫导航钩子： 返回true或者false
  /**
   * 在视图可以进入之前运行。 这可以在经过身份验证的视图中用作一种“保护”，您需要在视图可以进入之前检查权限
   */
  ionViewCanEnter(){
    console.log(`Ionic触发ionViewCanEnter`)
    const date = new Date().getHours()
    console.log(date)
    if (date > 22) {
      return false
    }
    return true
  }
  /**
   * 在视图可以离开之前运行。 这可以在经过身份验证的视图中用作一种“防护”，您需要在视图离开之前检查权限
   */
  ionViewCanLeave(){
    console.log(`Ionic触发ionViewCanLeave`)
    const date = new Date().getHours()
    console.log(date)
    if (date > 10) {
      return false
    }
    return true
  }
}
