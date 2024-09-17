import { Component } from '@angular/core';
import { Pedido } from 'src/app/models/Pedido';
import { ListRequestedSongsComponent } from './list-requested-songs/list-requested-songs.component';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  nomeDoKaroake: string = "Sérgio Duarte";

  dataSource: Pedido[] = [
    {_id: '1', avaliacao: 10, karaoke: {_id: '43243', nome: 'VideoBar'}, video_id: '432423', cliente: 'João', data: new Date(), titulo: 'titulo musica', total_avaliacoes: 1},
    {_id: '2', avaliacao: 10, karaoke: {_id: '43243', nome: 'VideoBar'}, video_id: '432423', cliente: 'João', data: new Date(), titulo: 'titulo musica', total_avaliacoes: 1}
  ];
  displayedColumns: string[] = ['titulo', 'cliente', 'action'];

  pularMusica(){
    console.log('pular música')
    // TODO: Checar se tem música no karaokê
    // TODO: Se sim, passar para a próxima
  }

  trocarMusica(element: Pedido){
    console.log("trocar: ", element)
  }

  removerMusica(element: Pedido){
    console.log("remover: ", element)
  }

  adicionarMusica(element: Pedido){
    console.log("adicionar: ", element)
  }
}
