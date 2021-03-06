import { CrimeTimelineService } from './crime-timeline.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular/main';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AppComponent } from './app.component';
import { TopCrimesComponent } from './top-crimes/top-crimes.component';
import { TopPlayersComponent } from './top-players/top-players.component';
import { TopTeamsComponent } from './top-teams/top-teams.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { CrimeTimelineComponent } from './crime-timeline/crime-timeline.component';
import { GlobalDatepickerComponent } from './global-datepicker/global-datepicker.component';


@NgModule({
  declarations: [
    AppComponent,
    TopCrimesComponent,
    TopPlayersComponent,
    TopTeamsComponent,
    NavigatorComponent,
    AboutComponent,
    CrimeTimelineComponent,
    GlobalDatepickerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    AgGridModule.withComponents([]),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CrimeTimelineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
