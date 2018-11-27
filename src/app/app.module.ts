// 根模块  告诉Ionic如何组装应用
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; //s使用了sharedModule 就不用引入这个了
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpClientModule  } from '@angular/common/http'
// 根组件
import { MyApp } from './app.component';
// 页面组件
import { ContactPage } from '../pages/contact/contact'
import { HomePage } from '../pages/home/home'
import { TabsPage } from '../pages/tabs/tabs'
// page Module
import { AboutPageModule } from './../pages/about/about.module';
import { MessagePageModule } from './../pages/message/message.module';
import { LoginPageModule } from './../pages/login/login.module';
import { NewsPageModule } from './../pages/news/news.module';
// 公共组件
import {ComponentsModule} from '../components/components.module'
// 启动画面等等的配置
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// service
import { StorageService } from './../service/storage.service';
import { TokenServie } from './../service/token.service';
import { HttpService } from './../service/http.service';
import { MissionService } from './../service/mission.service';
// common组件
import { SharedModule } from './../shared/shared.module';
// config
import { CONFIG } from '@config'
@NgModule({
  declarations: [/* 告诉Angular哪些模块属于该模块 当你创建更多组件时，也要把它们添加到 declarations 中。每个组件都应该（且只能）声明（declare）在一个 NgModule 类中 declarations 数组只能接受可声明对象。可声明对象包括组件、指令和管道。 */
    MyApp,
    ContactPage,
    HomePage,
    TabsPage
  ],
  // 依赖的模块，引入的模块在这里注入
  imports: [
    BrowserModule,
    SharedModule,     // common
    // DirectivesModule,
    ComponentsModule, // 全局 components
    HttpClientModule, // http client
    // rootPage配置 
    IonicModule.forRoot(MyApp, {
      preloadModules: true,              // 预加载  
      backButtonText: '',                // 隐藏返回按钮显示文字
      tabsHideOnSubPages: 'true'         //隐藏全部子页面tabs
      /* 
      tabsHideOnSubPages: 'true' ,      //隐藏全部子页面tabs
      iconMode: 'ios',                  //引用iOS的返回图标
      mode: 'ios',                      //把平台设置成iOS的风格
      modalEnter: 'modal-slide-in',     //设置返回的动画效果
      modalLeave: 'modal-slide-out',    //设置返回的动画效果
      backButtonText : '返回',          //设置返回按钮的文本
      */
    }),
    // page module
    AboutPageModule,
    LoginPageModule,
    NewsPageModule,
    MessagePageModule
    // directives
    
  ],
  bootstrap: [IonicApp], // 启动的模块
  entryComponents: [ /* 这个是第一次加载的组件。定义这个组件时定义应该被编译的组件。 也就是说哪些不具有.module.ts的组件 同时启动tree-shaking */
    MyApp,
    ContactPage,
    HomePage,
    TabsPage
    /* AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    NewsPage,
    LoginPage,
    MessagePage */
  ],
  providers: [/* 配置自定义服务 */
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: 'CONFIG', useValue: CONFIG}, // 环境变量
    TokenServie, // 用户token
    StorageService,// 服务要在全局的provide中注册吗 ? 答案：是的
    HttpService,
    MissionService // 用于父子组件通信的service
  ]
})
export class AppModule {}
