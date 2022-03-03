import { Component, OnInit } from '@angular/core';
import {ArticleService} from "../article.service";
import {Article} from "../article";
import {NgForm} from "@angular/forms";
import {response} from "express";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
  dateNow: Date = new Date;

  constructor(private articleService: ArticleService, private date: DatePipe) { }

  ngOnInit(): void {
    console.log(`${this.dateNow.getUTCMonth()} ${this.dateNow.getDate()}, ${this.dateNow.getFullYear()}} `)
  }

  public createArticle(articleObject: NgForm): void {
    articleObject.value.date = (`${this.dateNow.getUTCMonth()} ${this.dateNow.getDate()}, ${this.dateNow.getFullYear()}} `)
    this.articleService.createArticle(articleObject.value).subscribe(
      (response: Article) => {
        alert(`The article has been created and added to the user view under id: ${response.id}`)
      },
    (error) => {
        alert(error.message);
        console.log("createArticle is not working")
    }
    )
  }
}
