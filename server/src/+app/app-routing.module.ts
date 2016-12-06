import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', redirectTo: '/components', pathMatch: 'full' },
    ])
  ],
})
export class AppRoutingModule { }
