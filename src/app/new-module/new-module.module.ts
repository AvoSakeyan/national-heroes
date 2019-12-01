import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataInjectService} from '../data-inject.service';
import {Component1Component} from './component1/component1.component';
import {Component2Component} from './component2/component2.component';
import {FormsModule} from '@angular/forms';
import { ChildComponent } from './component1/child/child.component';




@NgModule({
  declarations: [Component1Component, Component2Component, ChildComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [Component1Component, Component2Component]
})
export class NewModuleModule {
}
