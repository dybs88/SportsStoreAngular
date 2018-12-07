import { NgModule } from "@angular/core";
import { CounterDirective } from "./infrastructure/counter.directive";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [CommonModule],
  declarations: [CounterDirective],
  exports: [CounterDirective]
})

export class SsCommonModule { }
