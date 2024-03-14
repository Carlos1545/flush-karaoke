import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { UserRateComponent } from '../user-rate/user-rate.component';

@Component({
  selector: 'app-user-list-music',
  templateUrl: './user-list-music.component.html',
  styleUrls: ['./user-list-music.component.css']
})
export class UserListMusicComponent {
  dataSource = [
    {titulo: 'Cazuza - Exagerado (Versão Karaokê)', cliente: 'Junior'},
    {titulo: 'Raça Negra - Cheia de Manias - Karaokê', cliente: 'Ana'},
    {titulo: 'Evanescence - Bring Me To Life (Karaoke Version)', cliente: 'Sebastião'},
    {titulo: 'Highway to Hell - AC/DC | Karaoke Version | KaraFun', cliente: 'Lorena'},
    {titulo: 'Karaokê Tá Vendo Aquela Lua - Exaltasamba', cliente: 'Diego'},
    {titulo: 'Michael Jackson - Billie Jean (Karaoke Version)', cliente: 'Maria'}

  ]
  displayedColumns: string[] = ['titulo', 'cliente'];

  constructor(private _bottomSheet: MatBottomSheet){}

  openBottomSheet(): void {
    this._bottomSheet.open(UserRateComponent);
  }
}
