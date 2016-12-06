import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
import { RenderComponent } from './render/render.component';

import { TestRoutingModule } from './test-routing.module'

@NgModule({
  imports: [
    CommonModule,
    TestRoutingModule
  ],
  declarations: [TestComponent, RenderComponent]
})
export class TestModule { }
