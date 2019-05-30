import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  exportAs: 'highlightDirective'
})
export class HighlightDirective {

  @Input() appHighlight;
  constructor(private el: ElementRef,
    private renderer: Renderer2
    ) {
  }

  @HostListener('mouseover')
  onHoverDupa(){
    this.renderer.addClass(this.el.nativeElement, this.appHighlight)
  }

  @HostListener('mouseout')
  onHoverOutDupa() {
    this.renderer.removeClass(this.el.nativeElement, this.appHighlight)
  }

  changeBackground(color) {
    this.renderer.setStyle(this.el.nativeElement, 'background', color)
  }

}
