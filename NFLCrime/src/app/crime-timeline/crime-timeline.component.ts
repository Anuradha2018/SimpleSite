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
    let data = this.crimeTimelineService.showTimeline()
      .subscribe(res => {
        console.log(res);
      })
      let ctx = document.getElementById("myChart");
      let myChart = new Chart(ctx, {
      type: 'bar',
      data: {
      labels: ["Feb,2000", "July,2000", "Aug,2000", "Sept,2000", "Dec,2001", "oct,2002", "May,2004", "March,2005", "June,2006", "Feb,2011", "April,2011", "May,2011", "June,2011", "Oct,2014"],
      datasets: [{
      label: '# of arrest_count',
      data: [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: false,
    scales: {
      xAxes: [{
        ticks: {
          maxRotation: 90,
          minRotation: 80
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});
  }

}
