import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MunkasokComponent } from './munkasok/munkasok.component';
import { ShowMunComponent } from './munkasok/show-mun/show-mun.component';
import { AddEditMunComponent } from './munkasok/add-edit-mun/add-edit-mun.component';
import { MunkakComponent } from './munkak/munkak.component';
import { ShowMkComponent } from './munkak/show-mk/show-mk.component';
import { AddEditMkComponent } from './munkak/add-edit-mk/add-edit-mk.component';
import { GepekComponent } from './gepek/gepek.component';
import { ShowGkComponent } from './gepek/show-gk/show-gk.component';
import { AddEditGkComponent } from './gepek/add-edit-gk/add-edit-gk.component';
import {SharedService} from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MunkasokComponent,
    ShowMunComponent,
    AddEditMunComponent,
    MunkakComponent,
    ShowMkComponent,
    AddEditMkComponent,
    GepekComponent,
    ShowGkComponent,
    AddEditGkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
