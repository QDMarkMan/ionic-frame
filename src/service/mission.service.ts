import { Subject } from 'rxjs/Subject';
import { Injectable, EventEmitter } from '@angular/core'; // 标记元数据

// 使用service进行父子组件的双向交流
@Injectable() // 装饰器把它标记为可供注入的服务
export class MissionService {
  familyData: string = 'I am family data'
  // 订阅式的共享数据
  private Source = new Subject()
  Status$=this.Source.asObservable()
  statusMission (msg: string) {
    this.Source.next(msg)
  }
  // Event通信 来自angular
  serviceEvent = new EventEmitter()
}