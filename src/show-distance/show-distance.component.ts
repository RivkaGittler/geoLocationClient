import { Component, OnInit, HostBinding, Input, ViewEncapsulation } from '@angular/core';
// import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpClient } from '@angular/common/http';

import { Distance } from '../distances';

@Component({
  selector: 'app-show-distance',
  templateUrl: './show-distance.component.html',
  styleUrls: ['./show-distance.component.css', '../show-responses/show-responses.component.css']
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class ShowDistanceComponent implements OnInit {

  @Input() dis: Distance = new Distance();

  // distance = null;
  // @Input() source: string = null;
  // @Input() destination: string = null;

  apiRoot = 'http://localhost:3001/distance';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getDistance();
  }


  getDistance() {
    return this.http.get(this.apiRoot, {
      params: {
        source: this.dis.source,
        destination: this.dis.destination
      },
      observe: 'response'
    }).subscribe(data => this.dis.distance = data.body['distance']);
  }

}
