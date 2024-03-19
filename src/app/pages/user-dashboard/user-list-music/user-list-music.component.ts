import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { UserRateComponent } from '../user-rate/user-rate.component';
import { PedidoService } from 'src/app/service/pedido.service';
import { KaraokeService } from 'src/app/service/karaoke.service';
import { Pedido } from 'src/app/models/Pedido';

@Component({
  selector: 'app-user-list-music',
  templateUrl: './user-list-music.component.html',
  styleUrls: ['./user-list-music.component.css']
})
export class UserListMusicComponent implements OnInit{
  dataSource: Pedido[] = []
  displayedColumns: string[] = ['titulo', 'cliente'];

  constructor(
    public karaokeService: KaraokeService,
    private pedidoService: PedidoService,
    private _bottomSheet: MatBottomSheet
  ) {}

  ngOnInit(): void {
    // TODO: Verificar se o usuário está conectado com algum karaoke

    // TODO: Popular o dataSource
    this.pedidoService.listarPedidos(this.karaokeService.karaoke_id).subscribe({
      next: (results: any) => {
        console.log(results)
        this.dataSource = results.pedidos;
      },
      error: () => {}
    })
  }

  openBottomSheet(): void {
    this._bottomSheet.open(UserRateComponent, {
      data: {
        pedido: this.dataSource[0]._id,
        titulo_video: this.dataSource[0].titulo,
        cliente: this.dataSource[0].cliente
      }
    });
  }

  syncKaraoke(): void {
    // TODO: Ligar câmera do celular via service-worker

    // TODO: Validar QR Code com o karaokê

    // TODO: Buscar o id do karaokê baseado no QR Code
    this.karaokeService.temConexao = true;

    this.pedidoService.listarPedidos(this.karaokeService.karaoke_id).subscribe({
      next: (results: any) => {
        this.dataSource = results.pedidos;
      },
      error: () => {}
    })
  }
}
