import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { KaraokeService } from 'src/app/service/karaoke.service';
import { PedidoService } from 'src/app/service/pedido.service';

@Component({
  selector: 'app-confirmation-select-music',
  templateUrl: './confirmation-select-music.component.html',
  styleUrls: ['./confirmation-select-music.component.css']
})
export class ConfirmationSelectMusicComponent implements OnInit{
  musica: string = "";

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    private _bottomSheetRef: MatBottomSheetRef<ConfirmationSelectMusicComponent>,
    private pedidoService: PedidoService,
    private karaokeService: KaraokeService,
    private router: Router,
    private _snackBar: MatSnackBar
  ){}
  
  ngOnInit(): void {
    this.musica = this.data.video.titulo;
  }

  gerarPedido(form: NgForm): void {
    this.pedidoService.criarPedido(this.karaokeService.karaoke_id, this.data.video.idVideo, form.value.nome, this.data.video.titulo).subscribe({
      next: () => {
        this._bottomSheetRef.dismiss();
        this.router.navigate(['/user-dashboard/listagem'])
        this._snackBar.open("Pedido realizado com sucesso", "Ok");
      },
      error: err => console.error(err)
    }) 
  }
}
