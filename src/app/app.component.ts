import { Component } from '@angular/core';
import { KaraokeService } from './service/karaoke.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flush-karaoke';
  temConexao: boolean = false;

  constructor(
    public karaokeService: KaraokeService,
  ){}

  syncKaraoke(): void {

  }
}
