import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Article } from './article';
import {Observable} from "rxjs";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getAllArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.apiServerUrl}/article/all`)
  }

  public getArticle(articleId: number): Observable<Article> {
    return this.http.get<Article>(`${this.apiServerUrl}/article/${articleId}`)
  }

  public createArticle(articleObject: Article): Observable<Article> {
    return this.http.post<Article>(`${this.apiServerUrl}/article/add`, articleObject)
  }

  public deleteArticle(articleId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/article/delete/${articleId}`)
  }
}
