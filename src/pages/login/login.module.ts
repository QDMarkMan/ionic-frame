import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { LoginService } from './../../logic-service/login.service';


@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    SharedModule,
    IonicPageModule.forChild(LoginPage)
    // DirectivesModule
  ],
  providers: [
    LoginService
  ]
})
export class LoginPageModule {}
