import { Component, OnInit } from '@angular/core';
import {Article} from "../article";
import {HttpErrorResponse} from "@angular/common/http";
import {ArticleService} from "../article.service";
import {NgxSpinnerService} from "ngx-spinner";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article: Article | undefined;
  //articleId: string | undefined;

  constructor(
    private articleService: ArticleService,
    private spinner: NgxSpinnerService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getArticle(this.activatedRoute.snapshot.paramMap.get("articleId") as string)
  }

  public getArticle(articleId: string): void {
    this.spinner.show();
    this.articleService.getArticle(articleId).subscribe(
      (response: Article) => {
        this.article = response;
        this.spinner.hide();
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }

}
