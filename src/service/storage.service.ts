/*
 * @Author: etongfu 
 * @Date: 2018-11-19 11:05:34 
 * @Last Modified by: etongfu
 * @Last Modified time: 2018-11-19 11:51:52
 * common http service
 */
import { Injectable } from '@angular/core'
enum StorageType {
  session = 'session',
  local = 'local'
}
@Injectable()
export class StorageService {
  /**
   * 获取storage的值
   * @param name 
   * @param type 
   * @returns "" || JSON
   */
  getStorage (name: string, type:StorageType = StorageType.local) {
    if (name === '') {
      return name
    }
    type = type || StorageType.local
    let temp = window[`${type}Storage`].getItem(name)
    return JSON.parse(temp)
  }
  /**
   * 设置storage
   * @param name 
   * @param data 
   * @param type 
   */
  setStorage (name: string, data: any, type:StorageType = StorageType.local):void {
    type = type || StorageType.local
    const temp = JSON.stringify(data)
    window[`${type}Storage`].setItem(name, temp)
  }
  /**
   * 移除storage
   * @param name 
   * @param type 
   */
  removeStorage (name: string, type:StorageType = StorageType.local) {
    type = type || StorageType.local
    window[`${type}Storage`].removeItem(name)
  }
  /**
   * 清空storage
   * @param type 
   */
  clearStorage (type:StorageType = StorageType.local) {
    window[`${type}Storage`].clear()
  }
}