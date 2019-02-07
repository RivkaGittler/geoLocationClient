import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Distance } from '../distances';

@Component({
  selector: 'app-popular-search',
  templateUrl: './popular-search.component.html',
  styleUrls: ['./popular-search.component.css', '../show-responses/show-responses.component.css']
})
export class PopularSearchComponent implements OnInit {

  dis: Distance = new Distance();
  // hits = 26;
  // source: string;
  // destination: string;

  apiRoot = 'http://localhost:3001/popularsearch';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getPopular();
  }

  getPopular() {
    return this.http.get(this.apiRoot, {
      observe: 'response'
    }).subscribe(data => [
      this.dis.source = data.body['source'],
      this.dis.destination = data.body['destination'],
      this.dis.hits = data.body['hits']
    ]);
  }

}
