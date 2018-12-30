import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { TopCrimes } from './models/topCrimes';

  
const endpoint = 'http://nflarrest.com/api/v1/crime';
const httpOptions = {
headers: new HttpHeaders({
  'Content-Type':  'application/json'
})
};

@Injectable({
  providedIn: 'root'
})
export class TopCrimesService {

  constructor(private http: HttpClient) { }

  // Because we are not using a type checker, so the response should be extracted.
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getCrimes(): Observable<any> {
    return this.http.get(endpoint).pipe(
      map(this.extractData));
  }
  /*getCrimes(): Observable<TopCrimes> {
    return this.http.get(endpoint).pipe(map((response:Response)=><TopCrimes>));
  }*/
}
