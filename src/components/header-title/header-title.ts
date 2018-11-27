import { Component } from '@angular/core';

/**
 * Generated class for the HeaderTitleComponent component.
 */
@Component({
  selector: 'header-title',
  templateUrl: 'header-title.html'
})
export class HeaderTitleComponent {

  text: string
  public list = []
  constructor() {
    /* 构造函数  初始化的时候就会触发 */
    console.log('Hello HeaderTitleComponent Component')
    this.text = 'Hello World'
    
    for (let index = 0; index < 10; index++) {
      this.list.push(index)
    }
  }

}
