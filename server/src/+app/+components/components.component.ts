import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

import { ModelService } from '../shared/model/model.service';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'components',
  styleUrls: [ './components.component.css' ],
  templateUrl: './components.component.html'
})
export class ComponentsComponent {
  constructor() {
  }

  }

