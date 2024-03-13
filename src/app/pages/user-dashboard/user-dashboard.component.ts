import { Component } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent {
  dataSource = [
    {titulo: 'Cazuza - Exagerado (Versão Karaokê)', cliente: 'Junior'},
    {titulo: 'Raça Negra - Cheia de Manias - Karaokê', cliente: 'Ana'},
    {titulo: 'Evanescence - Bring Me To Life (Karaoke Version)', cliente: 'Sebastião'},
    {titulo: 'Highway to Hell - AC/DC | Karaoke Version | KaraFun', cliente: 'Lorena'},
    {titulo: 'Karaokê Tá Vendo Aquela Lua - Exaltasamba', cliente: 'Diego'},
    
    {titulo: 'Michael Jackson - Billie Jean (Karaoke Version)', cliente: 'Maria'}

  ]
  displayedColumns: string[] = ['titulo', 'cliente'];
}
