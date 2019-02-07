import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
   FormsModule,
   ReactiveFormsModule,
   FormGroup, FormControl,
   Validators, FormBuilder
} from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormDistanceComponent } from '../form-distance/form-distance.component';
import { ShowDistanceComponent } from '../show-distance/show-distance.component';
import { PopularSearchComponent } from '../popular-search/popular-search.component';
import { ShowResponsesComponent } from '../show-responses/show-responses.component';
import { PopularForListComponent } from '../popular-for-list/popular-for-list.component';

@NgModule({
   declarations: [
      AppComponent,
      FormDistanceComponent,
      ShowDistanceComponent,
      PopularSearchComponent,
      ShowResponsesComponent,
      PopularForListComponent
   ],
   imports: [
      ReactiveFormsModule,
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
