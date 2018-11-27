
import { Component, Input, Output, SimpleChange, EventEmitter} from '@angular/core';
// 用来通信的service
import { MissionService } from './../../service/mission.service';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'backtop',
  templateUrl: 'backtop.html'
})
export class BacktopComponent {
  
  text: string = 'Hello World'
  show: boolean = false //显示
  @Input() child: number // 标识这是一个props
  // 拦截父组件得值
  private _showContent: string 
  @Input()
  // set value
  set showContent(name: string) {
    if (name !== '4') {
      this._showContent = 'no'
    } else {
      this._showContent = name
    }
  }
  // get value
  get showContent () :string {
    return this._showContent
  }
  @Input() demo: string
  // 子向父传递得事件对象
  @Output() changeChild: EventEmitter<number> = new EventEmitter() // 定义事件传播器对象

  // 接收service中的数据
  subscription:Subscription

  constructor(
    public missionService:MissionService
  ) {
    // 返回一个订阅器
    this.subscription = missionService.Status$.subscribe((msg:string) => {
      this.text = msg
    })
  }
  // 执行子组件向父组件通信
  click () {
    // 父 ==> 子
    this.changeChild.emit(666)
    // 修改共享信息
    this.missionService.familyData = 'change data by child'
    // events共享信息
    this.emitByEvent()
  }
  // 监听所有属性值得变化
  ngOnChanges(changes: SimpleChange): void {
    /**
     * 从旧值到新值得一次变更
     * class SimpleChange {
        constructor(previousValue: any, currentValue: any, firstChange: boolean)
        previousValue: any // 变化前得值
        currentValue: any // 当前值
        firstChange: boolean
        isFirstChange(): boolean // 检查该新值是否从首次赋值得来的。
      }
     */
    // changes props集合对象
    console.log(changes['child'].currentValue) // 
  }
  // 父子组件通过本地变量交互
  fromFather () {
    console.log(`I am from father`)
    this.show  = !this.show
  }
  // 父子组件childView交互
  formChildView() {
    console.log(`I am from father by childView`)
  }
  // 通过emit 进行高级通信
  emitByEvent () {
    this.missionService.serviceEvent.emit('emit by event')
  }
  ionViewWillLeave(){
    // 取消订阅
    this.subscription.unsubscribe()
  }
}
