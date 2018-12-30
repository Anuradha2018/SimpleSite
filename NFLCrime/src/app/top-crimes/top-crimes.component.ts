import { TopCrimes } from './../models/topCrimes';
import { TopCrimesService } from './../top-crimes.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-top-crimes',
  templateUrl: './top-crimes.component.html',
  styleUrls: ['./top-crimes.component.css']
})
export class TopCrimesComponent implements OnInit {
  columnDefs = [
    {headerName: 'Category', field: 'Category' },
    {headerName: 'Arrest_Count', field: 'arrest_count' }
];
rowData: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(){
    this.rowData = this.httpClient.get('http://NflArrest.com/api/v1/crime');
    
 }

}
