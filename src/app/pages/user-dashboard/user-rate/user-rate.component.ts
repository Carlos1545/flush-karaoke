import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatSlider } from '@angular/material/slider';

@Component({
  selector: 'app-user-rate',
  templateUrl: './user-rate.component.html',
  styleUrls: ['./user-rate.component.css']
})
export class UserRateComponent {
  voto: number = 10;
  musicaAtual: string = "Cazuza - Exagerado (Versão Karaokê)";
  usuario: string = "Junior";

  constructor(private _bottomSheetRef: MatBottomSheetRef<UserRateComponent>) {}

  updateSetting(event: any) {
    if(event.target) this.voto = event.target.value;
  }

  votar(event: MouseEvent): void {
    event.preventDefault();

    // TODO: Enviar para o banco de dados, informação do voto

    this._bottomSheetRef.dismiss();
  }

}
