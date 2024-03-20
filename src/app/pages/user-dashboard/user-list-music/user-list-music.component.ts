import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { UserRateComponent } from '../user-rate/user-rate.component';
import { PedidoService } from 'src/app/service/pedido.service';
import { KaraokeService } from 'src/app/service/karaoke.service';
import { Pedido } from 'src/app/models/Pedido';
import { ScannerQRCodeResult } from 'ngx-scanner-qrcode';

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
    if(localStorage.getItem("karaoke_id")){
      this.karaokeService.karaoke_id = localStorage.getItem("karaoke_id") || "";
      this.karaokeService.temConexao = true;

      this.pedidoService.listarPedidos(this.karaokeService.karaoke_id).subscribe({
        next: (results: any) => {
          console.log(results)
          this.dataSource = results.pedidos;
        },
        error: () => {}
      })
    }
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

  syncKaraoke(event: ScannerQRCodeResult[]): void {
    if(event[0].value){
      this.karaokeService.karaoke_id = event[0].value;
      localStorage.setItem("karaoke_id", this.karaokeService.karaoke_id)

      // TODO: Buscar o id do karaokê baseado no QR Code
      this.karaokeService.temConexao = true;

      this.pedidoService.listarPedidos(this.karaokeService.karaoke_id).subscribe({
        next: (results: any) => {
          this.dataSource = results.pedidos;
        },
        error: () => {}
      })
    }else{
      return
    }
  }
}
