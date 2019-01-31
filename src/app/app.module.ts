import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
   FormsModule,
   ReactiveFormsModule,
   FormGroup, FormControl,
   Validators, FormBuilder
} from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormDistanceComponent } from '../form-distance/form-distance.component';
import { ShowDistanceComponent } from '../show-distance/show-distance.component';

@NgModule({
   declarations: [
      AppComponent,
      FormDistanceComponent,
      ShowDistanceComponent
   ],
   imports: [
      ReactiveFormsModule,
      BrowserModule,
      AppRoutingModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
