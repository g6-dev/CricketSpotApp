import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'create-account', loadChildren: './pages/create-account/create-account.module#CreateAccountPageModule' },
  { path: 'aboutus', loadChildren: './pages/aboutus/aboutus.module#AboutusPageModule' },
  { path: 'create-team', loadChildren: './pages/create-team/create-team.module#CreateTeamPageModule' },
  { path: 'user-account', loadChildren: './pages/user-account/user-account.module#UserAccountPageModule' },
  { path: 'myteam', loadChildren: './pages/myteam/myteam.module#MyteamPageModule' },  { path: 'add-score', loadChildren: './pages/add-score/add-score.module#AddScorePageModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
