import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrimeTimelineService {

  constructor(private httpClient: HttpClient) { }

  showTimeline() {
    return this.httpClient.get("http://nflarrest.com/api/v1/crime/timeline/Theft").pipe(map(result => result));
  }
}
