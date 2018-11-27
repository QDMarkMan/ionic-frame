import { HttpService } from './../service/http.service';
import { Injectable } from '@angular/core'
@Injectable()
export class LoginService {
  constructor (
    public httpService: HttpService
  ) {

  }
  /**
   * 登录服务
   * @param para 
   */
  public loginByUsername (para) {
    return this.httpService.post('/loginBend/doLogin', para)
  }
}