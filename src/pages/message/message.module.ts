import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MessagePage } from './message';

@NgModule({
  declarations: [
    MessagePage,
  ],
  imports: [
    SharedModule,
    IonicPageModule.forChild(MessagePage)
  ]
})
export class MessagePageModule {}
