import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[sxylight]'
})
export class SxylightDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }
  // 指令绑定的值
  @Input('sxylight') highlightColor: string;
  // 指令宿主绑定的值
  @Input() defaultColor: string;
  // 监听宿主事件
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || 'red');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}