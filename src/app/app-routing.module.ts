import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BlogPageComponent} from "./blog-page/blog-page.component";
import {HomeComponent} from "./home/home.component";
import {ArticleComponent} from "./article/article.component";

const routes: Routes = [
  //Blog paths( would like to implement children instead of repeating code)
  {path: "blog", component: BlogPageComponent},
  {path: "blog/article/:articleId", component: ArticleComponent},
  //Home path
  {path: "", component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
