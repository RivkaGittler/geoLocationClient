import { Component, OnInit, Input } from '@angular/core';
import { Distance } from '../distances';

@Component({
  selector: 'app-popular-for-list',
  templateUrl: './popular-for-list.component.html',
  styleUrls: ['./popular-for-list.component.css', '../show-responses/show-responses.component.css']
})
export class PopularForListComponent implements OnInit {
  @Input() dis: Distance = new Distance();

  constructor() { }

  ngOnInit() {
    // this.dis.source = 'ירושלים';
    // this.dis.destination = 'בני ברק';
    // this.dis.hits = 4;
  }

}
