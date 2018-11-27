import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[modaltitle]'
})
export class ModaltitleDirective {
  // 指令类中的对象都是私有属性
  constructor(private el: ElementRef) { 
    console.log(this.el)
    el.nativeElement.style.backgroundColor = 'yellow';
  }
  @Input('modaltitle') titleColor: string // 指令输入
  @Input() defaultColor: string // 默认输入
  // 用于对宿主元素的事件监听
  @HostListener('mouseenter', ['$event']) 
  onMouseEnter(){
    this.setStyle(this.titleColor || this.defaultColor || 'red')
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.setStyle('#000')
  }
  /**
   * 设置颜色
   * @param color 
   */
  private setStyle (color: string) {
    this.el.nativeElement.style.color = color
  }
}