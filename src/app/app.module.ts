import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { HttpClientModule } from '@angular/common/http';
import {MaterialModule} from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { FirstBlogComponent } from './first-blog/first-blog.component';
import { SecondBlogComponent } from './second-blog/second-blog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeroFormComponent } from './hero-form/hero-form.component';
import {MatSortModule} from "@angular/material/sort";


//import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';

//import {ChinesePaginator} from "./second-blog/chinese-paginator";


@NgModule({
  declarations: [
    AppComponent,
    FirstBlogComponent,
    SecondBlogComponent,
    HeroFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSortModule
  ],
  providers: [
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
