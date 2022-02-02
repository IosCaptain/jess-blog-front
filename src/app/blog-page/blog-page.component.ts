import { Component, OnInit } from '@angular/core';
import {Article} from "../article";
import {ArticleService} from "../article.service";
import {HttpErrorResponse} from "@angular/common/http";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {
  allArticles: Article[] | undefined;
  article: Article | undefined;
  featuredArticle: Article | undefined;

  constructor(private articleService: ArticleService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.getAllArticles();
    // Not in use, tetsed for search bar implementation
    // this.getArticleById("1");
  }

  public getAllArticles(): void {
    this.spinner.show();
    this.articleService.getAllArticles().subscribe(
      (response: Article[]) => {
        this.allArticles = response;
        this.featuredArticle = this.allArticles[0];
        this.spinner.hide();
      },
      (error: HttpErrorResponse) => {
        alert("Not able to get information from Database")
      }
    )
  }
  public getArticleById(articleId: string): void {
    this.articleService.getArticle(articleId).subscribe(
      (response: Article) => {
        this.article = response;
      },
      (error: HttpErrorResponse) => {
        alert("Not able to find the specified article")
      }
    )
  }

}
