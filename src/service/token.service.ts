import { StorageService } from './storage.service';
import { Injectable } from '@angular/core';

@Injectable()
export class TokenServie {
  tokenKey: string = 'appToken'
  constructor (public storageService: StorageService) {
    
  }
  /**
   * 设置Token
   * @param data 
   */
  public seToken (data) {
    this.storageService.setStorage(this.tokenKey,data)
  }
  /**
   * 获取Token
   */
  public getToken () {
    return this.storageService.getStorage(this.tokenKey)
  }
  /* getTokne () {

  }

  deleteToken () {

  }

  clearToken () {

  } */
}