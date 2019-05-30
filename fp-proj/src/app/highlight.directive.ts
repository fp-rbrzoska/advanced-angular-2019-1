import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() appHighlight;
  constructor(private el: ElementRef,
    private renderer: Renderer2
    ) {
  }

  @HostListener('mouseover')
  onHover(){
    this.renderer.addClass(this.el.nativeElement, this.appHighlight)
  }

  @HostListener('mouseout')
  onHoverOut() {
    this.renderer.removeClass(this.el.nativeElement, this.appHighlight)
  }

}
