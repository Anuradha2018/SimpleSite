import { TopPlayers } from './../models/topPlayers';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-top-players',
  templateUrl: './top-players.component.html',
  styleUrls: ['./top-players.component.css']
})
export class TopPlayersComponent implements OnInit {
    columnDefs = [
        {headerName: 'Name', field: 'Name' },
        {headerName: 'Arrest_Count', field: 'arrest_count' }
    ];
    rowData: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(){
    this.rowData = this.httpClient.get('http://NflArrest.com/api/v1/crime/topPlayers/Theft')
    }
}
