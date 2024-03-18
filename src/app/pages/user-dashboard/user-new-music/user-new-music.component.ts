import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Video } from 'src/app/models/Video';
import { YoutubeService } from 'src/app/service/youtube.service';

@Component({
  selector: 'app-user-new-music',
  templateUrl: './user-new-music.component.html',
  styleUrls: ['./user-new-music.component.css']
})
export class UserNewMusicComponent {
  videos: Video[] = [];

  constructor(private youtubeService: YoutubeService){}

  searchVideos(form: NgForm){
    console.log(form.value)
    this.youtubeService.listVideosBySearch(form.value.pesquisa).subscribe({
      next: (res) => {
        this.videos = res;
      },
      error: (error) => console.error(error)
    })
  }

  selecionarVideo(event: Event, video: Video){
    event.preventDefault();
    // TODOLIST: Validação para saber se o usuário já inseriu mais músicas do que o estipulado pela administração
    // TODOLIST: Inserir vídeo na fila do karaokê
  }
}
