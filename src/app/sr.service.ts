import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ServiceRequest} from "./sr";
import {environment} from "../environments/environment.prod";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SrService {
  apiBaseUrl: string = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public createSR(srObject: ServiceRequest): Observable<ServiceRequest> {
    return this.http.post<ServiceRequest>(`${this.apiBaseUrl}/service-request/add`, srObject)
  }
  public getAllSRs(): Observable<ServiceRequest[]> {
    return this.http.get<ServiceRequest[]>(`${this.apiBaseUrl}/service-request/all`)
  }
}
