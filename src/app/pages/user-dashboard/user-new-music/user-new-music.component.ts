import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Video } from 'src/app/models/Video';
import { YoutubeService } from 'src/app/service/youtube.service';
import { ConfirmationSelectMusicComponent } from './confirmation-select-music/confirmation-select-music.component';

@Component({
  selector: 'app-user-new-music',
  templateUrl: './user-new-music.component.html',
  styleUrls: ['./user-new-music.component.css']
})
export class UserNewMusicComponent {
  videos: Video[] = [];

  constructor(
    private youtubeService: YoutubeService,
    private _bottomSheet: MatBottomSheet
  ){}

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
    this._bottomSheet.open(ConfirmationSelectMusicComponent, {
      data: {
        video: video
      }
    });
  }
}
