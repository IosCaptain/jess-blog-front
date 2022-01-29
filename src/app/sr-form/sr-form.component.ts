import { Component, OnInit } from '@angular/core';
import {ServiceRequest} from "../sr";
import {SrService} from "../sr.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-sr-form',
  templateUrl: './sr-form.component.html',
  styleUrls: ['./sr-form.component.css']
})
export class SrFormComponent implements OnInit {
  allSRs: ServiceRequest[] | undefined;

  constructor(private srService: SrService) { }

  ngOnInit(): void {
    this.getAllSRs()
  }

  public getAllSRs(): void {
    this.srService.getAllSRs().subscribe(
      (response: ServiceRequest[]) => {
        this.allSRs = response
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }

}
