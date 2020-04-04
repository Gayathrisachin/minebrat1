import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { CitiesListComponent } from './cities-list/cities-list.component';
import { ResultComponent } from './result/result.component';
import {MatSelectModule,MatToolbarModule,MatFormFieldModule,MatButtonModule} from '@angular/material/'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http'
import {ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component'
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CitiesListComponent,
    ResultComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
