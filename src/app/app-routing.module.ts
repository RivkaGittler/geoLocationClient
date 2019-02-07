import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { AppComponent } from './app.component';
import { FormDistanceComponent } from '../form-distance/form-distance.component';
import { ShowResponsesComponent } from '../show-responses/show-responses.component';

const routes: Routes = [
  { path: '', component: FormDistanceComponent},
  { path: 'popular/:source/:destination', component: ShowResponsesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
