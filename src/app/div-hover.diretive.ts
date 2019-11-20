import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDivHover]'
})
export class DivHoverDirective {
  defaultColor = 'transparent';
  highlightedColor = 'lightblue';

  constructor(private elementRef: ElementRef, private rendered: Renderer2) {}

  @HostListener('mouseenter') mouseover() {
    this.rendered.setStyle(this.elementRef.nativeElement, 'background-color', this.highlightedColor);
  }

  @HostListener('mouseleave') mouseleave() {
    this.rendered.setStyle(this.elementRef.nativeElement, 'background-color', this.defaultColor);
  }
}
