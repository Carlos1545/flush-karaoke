import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { LyricsScreenComponent } from './pages/lyrics-screen/lyrics-screen.component';
import { UserListMusicComponent } from './pages/user-dashboard/user-list-music/user-list-music.component';
import { UserRateComponent } from './pages/user-dashboard/user-rate/user-rate.component';
import { UserNewMusicComponent } from './pages/user-dashboard/user-new-music/user-new-music.component';
import { AdminConfigurationComponent } from './pages/admin-dashboard/admin-configuration/admin-configuration.component';
import { ListRequestedSongsComponent } from './pages/admin-dashboard/list-requested-songs/list-requested-songs.component';

const routes: Routes = [
  { path: '', redirectTo: '/user-dashboard/listagem', pathMatch: 'full' },
  { path: 'user-dashboard/listagem', component: UserListMusicComponent },
  { path: 'user-dashboard/nova-musica', component: UserNewMusicComponent },
  { path: 'user-dashboard/nota', component: UserRateComponent },
  { path: 'lyrics-screen/:karaokeId', component: LyricsScreenComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'admin-dashboard/configuracao', component: AdminConfigurationComponent },
  { path: 'admin-dashboard/musicas-pedidas', component: ListRequestedSongsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
