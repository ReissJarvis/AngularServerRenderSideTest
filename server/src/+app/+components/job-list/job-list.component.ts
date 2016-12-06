import { Component, ChangeDetectionStrategy, ViewEncapsulation, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

interface item {
  id: number,
  title: string,
  price: number
}

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'job-list',
  styleUrls: [ './job-list.component.css' ],
  templateUrl: './job-list.component.html'
})
export class JobListComponent implements OnInit {

  data: Array<item> = [
    { id:1, title: "Computer", price: 699 },
    { id:2, title: "mouse", price: 12.99 },
    { id:3, title: "keyboard", price: 20.00 },
    { id:4, title: "floppy disk pack", price: 15.99}
  ];

  items:Array<item>;
  loading
  constructor() {

    // we need the data synchronously for the client to set the server response
    // we create another method so we have more control for testing

  }

  ngOnInit(){
    this.loading = true;
    this.getFakeObservable().subscribe(value => {
      this.items = value;
      this.loading = false
    })
  }

  getFakeObservable():Observable<Array<item>>{
    return new Observable<string>(observer => {
      setTimeout(() => {
        observer.next(JSON.stringify(this.data))
        observer.complete();
      }, 200)
    }).map(value => JSON.parse(value))
  }

}
