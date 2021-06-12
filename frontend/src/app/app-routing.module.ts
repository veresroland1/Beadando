import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MunkasokComponent} from './munkasok/munkasok.component';
import {MunkakComponent} from './munkak/munkak.component';
import {GepekComponent} from './gepek/gepek.component';

const routes: Routes = [
  {path:'munkasok',component:MunkasokComponent},
  {path:'munkak',component:MunkakComponent},
  {path:'gepek',component:GepekComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
