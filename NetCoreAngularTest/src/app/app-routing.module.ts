import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampionsComponent } from './champions/champions.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChampionDetailComponent } from './champion-detail/champion-detail.component';
import { AdmnNavBarComponent } from './admn-nav-bar/admn-nav-bar.component';

const routes: Routes = [
  { path: 'detail/:id', component: ChampionDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'champions', component: ChampionsComponent },
  { path: 'admnnavbar', component: AdmnNavBarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
