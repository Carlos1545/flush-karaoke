import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { UserRateComponent } from '../user-rate/user-rate.component';
import { PedidoService } from 'src/app/service/pedido.service';
import { KaraokeService } from 'src/app/service/karaoke.service';

@Component({
  selector: 'app-user-list-music',
  templateUrl: './user-list-music.component.html',
  styleUrls: ['./user-list-music.component.css']
})
export class UserListMusicComponent implements OnInit{
  dataSource = [
    {titulo: 'Cazuza - Exagerado (Versão Karaokê)', cliente: 'Junior'},
    {titulo: 'Raça Negra - Cheia de Manias - Karaokê', cliente: 'Ana'},
    {titulo: 'Evanescence - Bring Me To Life (Karaoke Version)', cliente: 'Sebastião'},
    {titulo: 'Highway to Hell - AC/DC | Karaoke Version | KaraFun', cliente: 'Lorena'},
    {titulo: 'Karaokê Tá Vendo Aquela Lua - Exaltasamba', cliente: 'Diego'},
    {titulo: 'Michael Jackson - Billie Jean (Karaoke Version)', cliente: 'Maria'}

  ]
  displayedColumns: string[] = ['titulo', 'cliente'];

  constructor(
    public karaokeService: KaraokeService,
    private pedidoService: PedidoService,
    private _bottomSheet: MatBottomSheet
  ) {}

  ngOnInit(): void {
    // TODO: Verificar se o usuário está conectado com algum karaoke

    // TODO: Popular o dataSource
    // this.pedidoService.listarPedidos().subscribe({
    //   next: () => {},
    //   error: () => {}
    // })
  }

  openBottomSheet(): void {
    this._bottomSheet.open(UserRateComponent);
  }

  syncKaraoke(): void {

  }
}
