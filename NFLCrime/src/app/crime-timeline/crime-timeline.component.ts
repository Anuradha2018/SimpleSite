import { Component, OnInit } from '@angular/core';
import { CrimeTimelineService } from './../crime-timeline.service';
import { Chart } from 'chart.js';
import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map';
import { Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-crime-timeline',
  templateUrl: './crime-timeline.component.html',
  styleUrls: ['./crime-timeline.component.css']
})
export class CrimeTimelineComponent implements OnInit {
  chart = [];

  constructor(private crimeTimelineService: CrimeTimelineService) { }

  ngOnInit() {
    this.crimeTimelineService.showTimeline()
      .subscribe(res => {
        console.log(res);
      })
  }

}
