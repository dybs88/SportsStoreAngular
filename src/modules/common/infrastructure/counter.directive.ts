import { Directive, ViewContainerRef, TemplateRef, SimpleChanges, Input, OnChanges, NgModule } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[counterOf]'
})

export class CounterDirective implements OnChanges {
  constructor(private container: ViewContainerRef, private template: TemplateRef<Object>) { }

  // tslint:disable-next-line:no-input-rename
  @Input('counterOf')
  counter: number;

  ngOnChanges() {
    this.container.clear();
    for (let i = 0; i < this.counter; i++) {
      this.container.createEmbeddedView(this.template, new CounterDirectiveContext(i + 1));
    }
  }
}

class CounterDirectiveContext {
  constructor(public $implicit: any) { }
}
