import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute, Router, Params } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-form-distance',
  templateUrl: './form-distance.component.html',
  styleUrls: ['./form-distance.component.css']
  // encapsulation: ViewEncapsulation.None
})
export class FormDistanceComponent implements OnInit {

  // source = 'jerusalem';
  // destination = 'tel aviv';
  myForm: FormGroup;

  constructor(private router: Router, private route: ActivatedRoute) {   }

  ngOnInit() {
    this.myForm = new FormGroup({
      source: new FormControl('', Validators.required),
      destination: new FormControl('', Validators.required)
    });
  }

  goToPopular() {
    this.router.navigate(['popular', this.myForm.get('source').value, this.myForm.get('destination').value]);
  }

}
