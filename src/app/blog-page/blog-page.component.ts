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

  constructor(private articleService: ArticleService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.getAllArticles();
  }

  public getAllArticles(): void {
    this.spinner.show();
    this.articleService.getAllArticles().subscribe(
      (response: Article[]) => {
        this.allArticles = response;
        this.spinner.hide();
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }

}
