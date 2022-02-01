import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import {ArticleService} from "./article.service";
import {HttpClientModule} from "@angular/common/http";
import {SrService} from "./sr.service";
import { SrFormComponent } from './sr-form/sr-form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';
import {NgxSpinnerModule} from "ngx-spinner";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SrMainPageComponent } from './sr-main-page/sr-main-page.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    BlogPageComponent,
    SrFormComponent,
    NavBarComponent,
    HomeComponent,
    ArticleComponent,
    PageNotFoundComponent,
    SrMainPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [ArticleService, SrService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
