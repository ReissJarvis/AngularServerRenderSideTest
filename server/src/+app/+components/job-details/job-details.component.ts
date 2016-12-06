import { Component, ChangeDetectionStrategy, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable'

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';

interface item {
  id: number,
  title: string,
  price: number
}

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'job-details',
  styleUrls: [ './job-details.component.css' ],
  templateUrl: './job-details.component.html'
})
export class JobDetailsComponent implements OnInit {

  data: Array<item> = [
    { id:1, title: "Computer", price: 699 },
    { id:2, title: "mouse", price: 12.99 },
    { id:3, title: "keyboard", price: 20.00 },
    { id:4, title: "floppy disk pack", price: 15.99}
  ];

  item:any;
  loading
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(){
    this.route.params
    .switchMap((params: Params) => {
      console.log(params)
      return this.getFakeObservable(+params['id'])
    }).subscribe((item: item) => {
      console.log("item", item)
      this.item = item
    },
    error => {
      console.log(error)
    });
  }

  ngOnDestory(){
    this.item = {}
  }

  getFakeObservable(id:number):Observable<item>{
    return new Observable<string>(observer => {
      setTimeout(() => {
        observer.next(JSON.stringify(this.data))
        observer.complete();
      }, 200)
    })
    .map(value => JSON.parse(value))
    .map(value => {
      var test = value.filter(arrayItem => +arrayItem.id == id)[0]
      console.log("filtered", test)
      return test
    })
  }

}
