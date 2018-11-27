import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsPage } from './news';
import { SharedModule } from './../../shared/shared.module';
// 引入service进行通信
import { MissionService } from './../../service/mission.service';


@NgModule({
  declarations: [
    NewsPage,
  ],
  imports: [
    SharedModule,
    IonicPageModule.forChild(NewsPage),
  ],
  providers: [MissionService]
})
export class NewsPageModule {}
