import { TokenServie } from './token.service';
import { StorageService } from './storage.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Injectable, Inject } from '@angular/core'
import {ReturnObject, Config} from '../interface/index'
/*
Generated class for the HttpServiceProvider provider.
*/
@Injectable()
export class HttpService{
  /**
   * @param CONFIG 
   * @param http 
   * @param navCtrl 
   */
  constructor(
    @Inject("CONFIG") public CONFIG:Config, 
    public storage: StorageService,
    public tokenService: TokenServie,
    public http: HttpClient
    ) {
      // super调用
      console.log(this.CONFIG)
  }
  /**
   * key to 'name='qweq''
   * @param key 
   * @param value 
   */
  private toPairString (key, value): string {
    if (typeof value === 'undefined') {
      return key
    }
    return `${key}=${encodeURIComponent(value === null ? '' : value.toString())}`
  }
  /**
   * objetc to url params
   * @param param 
   */
  private toQueryString (param, type: string = 'get') {
    let temp = []
    for (const key in param) {
      if (param.hasOwnProperty(key)) {
        let encodeKey = encodeURIComponent(key)
        temp.push(this.toPairString(encodeKey, param[key]))
      }
    }
    return `${type === 'get' ? '?' : ''}${temp.join('&')}`
  }
  /**
   * set http header
   */
  private getHeaders () {
    let token = this.tokenService.getToken()
    return new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded',
      'tokenheader': token ? token : ''
    })
  }
  /**
   * error handle
   * @param error 
   */
  /* private handleError (error: HttpErrorResponse) {
    console.log(error)
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`
      )
    }
  } */
  /**
   * http post请求 for promise
   * @param url
   * @param body
   */
  public post (url: string, body ? : any): Promise<ReturnObject> {
    const fullUrl = this.CONFIG.BASE_URL + url
    console.log(this.toQueryString(body, 'post'))
    return new Promise<ReturnObject>((reslove, reject) =>{
      this.http.post(fullUrl, body, {
        // params,
        headers: this.getHeaders()
      }).subscribe((res: any) => {
        reslove(res)
      }, err => {
        // this.handleError(err)
        reject(err)
      })
    })
  }
  /**
   * get 请求 return promise
   * @param url 
   * @param param 
   */
  public get(url: string, params: any = null): Promise<ReturnObject> {
    const fullUrl = this.CONFIG.BASE_URL + url
    let realParams = new HttpParams()
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        realParams.set(`${key}`, params[key])
      }
    }
    // add time map
    realParams.set(
      'timestamp', (new Date().getTime()).toString()
    )
    return new Promise<ReturnObject>((reslove, reject) =>{
      this.http.get(fullUrl, {
        params,
        headers: this.getHeaders()
      }).subscribe((res: any) => {
        console.log(res)
        reslove(res)
      }, err => {
        // this.handleError(err)
        reject(err)
      })
    })
  }
  // user has token or not
  public load () {
    if (this.tokenService.getToken()) {
      console.log('存在token')
    } else {
      console.log('用户还没登录')
    }
  }
}
