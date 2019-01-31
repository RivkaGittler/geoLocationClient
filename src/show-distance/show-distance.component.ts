import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute, Router, Params } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-show-distance',
  templateUrl: './show-distance.component.html',
  styleUrls: ['./show-distance.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShowDistanceComponent implements OnInit {

  distance = 78.6;
  popular = 26;
  source: string;
  destination: string;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.source = this.route.snapshot.paramMap.get('source');
    this.destination = this.route.snapshot.paramMap.get('destination');
  }

  goToForm() {
    this.router.navigate(['']);
  }

}
