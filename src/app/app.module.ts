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
import { YouTubePlayerModule } from '@angular/youtube-player';
import { QrCodeModule } from 'ng-qrcode';
import { NgxScannerQrcodeModule, LOAD_WASM } from 'ngx-scanner-qrcode';
import { LoginComponent } from './pages/admin-dashboard/login/login.component';
import { CreateAccountComponent } from './pages/admin-dashboard/create-account/create-account.component';

// Necessary to solve the problem of losing internet connection
LOAD_WASM().subscribe();

@NgModule({
  declarations: [
    AppComponent,
    LyricsScreenComponent,
    AdminDashboardComponent,
    UserRateComponent,
    UserListMusicComponent,
    UserNewMusicComponent,
    ConfirmationSelectMusicComponent,
    LoginComponent,
    CreateAccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    YouTubePlayerModule,
    QrCodeModule,
    NgxScannerQrcodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
