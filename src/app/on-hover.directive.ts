import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appOnHover]'
})
export class OnHoverDirective {

  constructor(public el: ElementRef, public r: Renderer2) {
    console.log(r);
  }

  @HostListener('mouseover') onHover() {
    this.r.addClass(this.el.nativeElement, 'onHover');
  }
  @HostListener('mouseleave') onLeave() {
    this.r.removeClass(this.el.nativeElement, 'onHover');
  }
}
