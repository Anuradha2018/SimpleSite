import { CrimeTimelineComponent } from './crime-timeline/crime-timeline.component';
import { AboutComponent } from './about/about.component';
import { TopTeamsComponent } from './top-teams/top-teams.component';
import { TopPlayersComponent } from './top-players/top-players.component';
import { TopCrimesComponent } from './top-crimes/top-crimes.component';




import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'topcrimes', component: TopCrimesComponent },
  { path: 'topplayers', component: TopPlayersComponent },
  { path: 'topteams', component: TopTeamsComponent },
  { path: 'crimetimeline', component: CrimeTimelineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
