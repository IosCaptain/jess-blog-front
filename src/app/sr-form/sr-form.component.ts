import { Component, OnInit } from '@angular/core';
import {ServiceRequest} from "../sr";
import {SrService} from "../sr.service";
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-sr-form',
  templateUrl: './sr-form.component.html',
  styleUrls: ['./sr-form.component.css']
})
export class SrFormComponent implements OnInit {
  allSRs: ServiceRequest[] | undefined;
  genders: String[] = ["Male", "Female", "Non-Binary", "Other"]
  createdSRID: number | undefined;


  constructor(private srService: SrService) { }

  ngOnInit(): void {
  }

  public createSR(srObject: NgForm): void {
    this.srService.createSR(srObject.value).subscribe(
      (response: ServiceRequest) => {
        this.createdSRID = response.id;
        alert(`Your reference number is ${this.createdSRID}, please save it to check your order progress.`)
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }

}
