import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RenderComponent }  from './render/render.component';


const appRoutes: Routes = [
  { path: '**', component: RenderComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TestRoutingModule {}
