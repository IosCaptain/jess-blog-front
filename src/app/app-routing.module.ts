import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BlogPageComponent} from "./blog-page/blog-page.component";
import {HomeComponent} from "./home/home.component";
import {ArticleComponent} from "./article/article.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {SrMainPageComponent} from "./sr-main-page/sr-main-page.component";
import {SrFormComponent} from "./sr-form/sr-form.component";
import {AboutPageComponent} from "./about-page/about-page.component";
import {ArticleWorkshopComponent} from "./article-workshop/article-workshop.component";
import {CreateArticleComponent} from "./create-article/create-article.component";

const routes: Routes = [
  //Blog paths( would like to implement children instead of repeating code)
  {path: "blog", component: BlogPageComponent},
  {path: "blog/article/:articleId", component: ArticleComponent},
  //Home path
  {path: "", component: HomeComponent},
  //SR Main Page
  {path: "service-request/main", component: SrMainPageComponent},
  //SR Form
  {path: "service-request/add", component: SrFormComponent},
  //About Page
  {path: "about", component: AboutPageComponent},
  //Article Workshop
  {path: "jessica-workshop-article", component: ArticleWorkshopComponent},
  {path: "jessica-workshop-article/create-article", component: CreateArticleComponent},
  //404
  {path: "**", component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
