import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentsComponent } from './components.component'
import { JobListComponent } from './job-list/job-list.component';
import { JobDetailsComponent } from './job-details/job-details.component'

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'components', component: ComponentsComponent, children:[
        { path: 'joblist', component: JobListComponent },
        { path:'jobdetails/:id', component:JobDetailsComponent}
      ] }

    ])
  ]
})
export class ComponentsRoutingModule { }
