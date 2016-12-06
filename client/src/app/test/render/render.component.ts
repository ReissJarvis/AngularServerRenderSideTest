import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'
import { Router } from '@angular/router'
import { Http } from '@angular/http';

interface page{
  loading:boolean,
  data:any
}
@Component({
  selector: 'app-render',
  templateUrl: './render.component.html',
  styleUrls: ['./render.component.css']
})
export class RenderComponent implements OnInit {
listPage: page = {
  loading: true,
  data: ''
}

detailsPage: page ={
  loading: true,
  data: ''
}



  constructor(private http: Http, private sanitizer: DomSanitizer, private router: Router) {
  }

  ngOnInit() {
    this.http.get(`http://localhost:3000/components/joblist`).subscribe(value => {
      console.log(value);
      this.listPage.loading = false
      this.listPage.data = this.sanitizer.bypassSecurityTrustHtml(value._body);
    });

  this.http.get(`http://localhost:3000/components/jobdetails/1`).subscribe(value => {
      console.log(value);
      this.detailsPage.loading = false
      this.detailsPage.data = this.sanitizer.bypassSecurityTrustHtml(value._body);
    });
  }
}
