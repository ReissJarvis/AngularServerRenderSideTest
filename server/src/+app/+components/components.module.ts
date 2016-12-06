import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ComponentsComponent } from './components.component';
import { ComponentsRoutingModule } from './components-routing.module';
import { JobListComponent } from './job-list/job-list.component';
import { JobDetailsComponent } from './job-details/job-details.component'

@NgModule({
  imports: [
    SharedModule,
    ComponentsRoutingModule
  ],
  declarations: [
    ComponentsComponent,
    JobListComponent,
    JobDetailsComponent
  ]
})
export class ComponentsModule { }
