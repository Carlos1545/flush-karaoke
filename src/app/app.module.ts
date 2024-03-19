import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularMaterialModule } from './modules/angular-material.module';
import { LyricsScreenComponent } from './pages/lyrics-screen/lyrics-screen.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserRateComponent } from './pages/user-dashboard/user-rate/user-rate.component';
import { UserListMusicComponent } from './pages/user-dashboard/user-list-music/user-list-music.component';
import { UserNewMusicComponent } from './pages/user-dashboard/user-new-music/user-new-music.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmationSelectMusicComponent } from './pages/user-dashboard/user-new-music/confirmation-select-music/confirmation-select-music.component';
import { SafeUrlPipe } from './pages/lyrics-screen/safe-url-pipe/safe-url.pipe';
import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  declarations: [
    AppComponent,
    LyricsScreenComponent,
    AdminDashboardComponent,
    UserRateComponent,
    UserListMusicComponent,
    UserNewMusicComponent,
    ConfirmationSelectMusicComponent,
    SafeUrlPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
