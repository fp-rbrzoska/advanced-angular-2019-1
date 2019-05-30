import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
@Directive({
  selector: '[ngRepeat]'
})
export class NgRepeatDirective {

  @Input()
  set ngRepeatDupa(num) {
    for(let i = 1; i <= num; i++) {
      this.viewContRef.createEmbeddedView(this.tempRef, {
        $implicit: i,
        multiplied: i*2
      })
    }
  };
  constructor(
    private viewContRef: ViewContainerRef,
    private tempRef: TemplateRef<any>) {

  }

  ngOnInit() {
    console.log("oninit: " +this.ngRepeatDupa)
  }

  ngOnChanges(changes) {
    console.log(changes)
  }
}
