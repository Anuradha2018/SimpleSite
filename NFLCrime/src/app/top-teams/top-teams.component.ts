import { TopTeams } from './../models/topTeams';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-top-teams',
  templateUrl: './top-teams.component.html',
  styleUrls: ['./top-teams.component.css']
})
export class TopTeamsComponent implements OnInit {
    columnDefs = [
        {headerName: 'Team', field: 'Team' },
        {headerName: 'Team_Name', field: 'Team_name' },
        {headerName: 'Team_City', field: 'Team_city' },
        {headerName: 'Arrest_Count', field: 'arrest_count' }
    ];
    rowData: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(){
    this.rowData = this.httpClient.get('http://NflArrest.com/api/v1/crime/topTeams/Theft')
}
}
