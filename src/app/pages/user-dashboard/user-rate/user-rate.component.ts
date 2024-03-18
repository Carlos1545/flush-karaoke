import { Component, Inject, OnInit } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatSlider } from '@angular/material/slider';
import { PedidoService } from 'src/app/service/pedido.service';

@Component({
  selector: 'app-user-rate',
  templateUrl: './user-rate.component.html',
  styleUrls: ['./user-rate.component.css']
})
export class UserRateComponent implements OnInit{
  voto: number = 10;
  musicaAtual: string = "";
  usuario: string = "";

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    private _bottomSheetRef: MatBottomSheetRef<UserRateComponent>,
    private pedidoService: PedidoService
  ) {}

  ngOnInit(): void {
    this.musicaAtual = this.data.titulo_video;
    this.usuario = this.data.cliente;
  }

  updateSetting(event: any) {
    if(event.target) this.voto = event.target.value;
  }

  votar(event: MouseEvent): void {
    event.preventDefault();

    // TODO: Enviar para o banco de dados, informação do voto
    this.pedidoService.avaliarPedido(this.data.pedido, this.voto).subscribe({
      next: () => {
        this._bottomSheetRef.dismiss();
      },
      error: err => console.error(err)
    })    
  }

}
