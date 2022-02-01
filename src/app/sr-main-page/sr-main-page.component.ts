import { Component, OnInit } from '@angular/core';
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-sr-main-page',
  templateUrl: './sr-main-page.component.html',
  styleUrls: ['./sr-main-page.component.css']
})
export class SrMainPageComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    // this.spinner.show();
    // this.spinner.hide();
  }

}
