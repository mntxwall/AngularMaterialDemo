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
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
