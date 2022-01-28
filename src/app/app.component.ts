import { Component } from '@angular/core';
import {Article} from "./article";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jess-blog-front';
  // allArticles: Article[] | undefined;
}
