import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute, Router, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Distance } from '../distances';

@Component({
  selector: 'app-show-responses',
  templateUrl: './show-responses.component.html',
  styleUrls: ['./show-responses.component.css']
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class ShowResponsesComponent implements OnInit {

  dis: Distance = new Distance();
  distances: Distance[];
  apiRoot = 'http://localhost:3001/popularsearchlist';


  // source: string = null;
  // destination: string = null;

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.dis.source = this.route.snapshot.paramMap.get('source');
    this.dis.destination = this.route.snapshot.paramMap.get('destination');
  }

  goToForm() {
    // this.myColor = 'white';
    this.router.navigate(['']);
  }

  // getPopularList() {
  //   return this.http.get(this.apiRoot, {
  //     observe: 'response'
  //   }).subscribe(data => [
  //     this.dis.source = data.body['source'],
  //     this.dis.destination = data.body['destination'],
  //     this.dis.hits = data.body['hits']
  //   ]);
  // }
}
