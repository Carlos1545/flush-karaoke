import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pedido } from 'src/app/models/Pedido';
import { KaraokeService } from 'src/app/service/karaoke.service';
import { PedidoService } from 'src/app/service/pedido.service';

@Component({
  selector: 'app-lyrics-screen',
  templateUrl: './lyrics-screen.component.html',
  styleUrls: ['./lyrics-screen.component.css']
})
 export class LyricsScreenComponent implements OnInit, AfterViewInit{
  @ViewChild("youTubePlayer") youTubePlayer!: ElementRef<HTMLDivElement>;
  @ViewChild("nota") nota!: ElementRef<HTMLHeadingElement>;

  qrCodeValue: string = "";

  playerVars = {
    autoplay: 1
  }
  
  dataSource: Pedido[] = [];
  displayedColumns: string[] = ['titulo', 'cliente'];

  videoIdAtual: string = ""
  intervalLoopPrincipal: any;

  idInvalido: boolean = false;
  acessoLiberado: boolean = false;
  mostrarNota: boolean = false;
  cantorAtual: string = "";
  mensagemAvaliacao: string = "...";

  pedidoRemovido: Pedido | undefined;
  videoHeight: number | undefined;
  videoWidth: number | undefined;

  constructor(
    public karaokeService: KaraokeService,
    private pedidoService: PedidoService,
    private changeDetectorRef: ChangeDetectorRef,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.syncKaraoke(() => {
      this.getListagemPedidos();
      this.buscaPedidos();
    });
  }

  ngAfterViewInit(): void {
    this.onResize();
    window.addEventListener('resize', this.onResize.bind(this));
  }

  public syncKaraoke(callback: Function){
    // TODO: Conectar à um karaokê baseado na URL
    let karaokeId = this.route.snapshot.params['karaokeId'] || "";
      
    this.karaokeService.getKaraoke(karaokeId).subscribe({
      next: () => {
        this.qrCodeValue = this.karaokeService.karaoke_id;

        callback();
      },
      error: err => {
        console.error(err)
        this.idInvalido = true;
      }
    })
  }

  private onResize(): void {
    this.videoWidth = this.youTubePlayer.nativeElement.clientWidth;
    this.videoHeight = this.youTubePlayer.nativeElement.clientHeight - 65;
    this.changeDetectorRef.detectChanges();
  }

  private buscaPedidos(){
    this.intervalLoopPrincipal = setInterval(() => this.getListagemPedidos(), 20000);
  }

  private getListagemPedidos(): void {
    this.pedidoService.listarPedidos(this.karaokeService.karaoke_id).subscribe({
      next: (results: any) => {
        this.dataSource = results.pedidos;
        if(this.dataSource.length > 0){
          clearInterval(this.intervalLoopPrincipal);

          this.playMusic(this.dataSource[0]);
        }else{
          this.buscaPedidos();
        }
      },
      error: err => console.error(err)
    })
  }

  private playMusic(pedido: any) {
    this.videoIdAtual = pedido.video_id;
  }

  public stateChangeYoutubePlayer(event: any){
    if(event.data == -1){ // video carregado
      event.target.playVideo();
    }
    if(event.data == 0){ // video encerrado
      // atualizar lista
      let pedido: Pedido | undefined = this.dataSource.shift();
      this.dataSource = this.dataSource.slice();

      if(pedido) {
        this.pedidoService.removerPedido(pedido._id).subscribe({
          next: (result: any) => {
            if(result.pedido.avaliacao && result.pedido.cliente) {
              this.cantorAtual = result.pedido.cliente;
              this.apresentarNota(result.pedido.avaliacao);
            }
          },
          error: err => console.error(err),
          complete: () => {
            if(this.dataSource.length > 0){
              this.playMusic(this.dataSource[0]);
            }else{
              this.buscaPedidos();
            }
          }
        })
      }
    }
  }

  public apresentarNota(avaliacao: number){
    this.mostrarNota = true;
    
    setTimeout(() => {
      this.nota.nativeElement.style.setProperty("--percent", avaliacao.toString());
      let audio = new Audio();
      audio.src = "../../../assets/audio/audio_tambores.m4a";
      audio.load();
      audio.play();
    }, 1000);

    setTimeout(() => {
      if(avaliacao < 1) this.mensagemAvaliacao = "Minha vó com voz de cigarro canta melhor!";
      else if(avaliacao < 2) this.mensagemAvaliacao = "Ficou tudo muito bom, menos o cantor.";
      else if(avaliacao < 3) this.mensagemAvaliacao = "Bronze 5 na arte de cantar.";
      else if(avaliacao < 4) this.mensagemAvaliacao = "É ... tá ruim ainda, vai treinando no chuveiro.";
      else if(avaliacao < 5) this.mensagemAvaliacao = "Mais ou menos ... mais ou menos.";
      else if(avaliacao < 6) this.mensagemAvaliacao = "Bebe um pouquinho mais que vai melhorar!";
      else if(avaliacao < 7) this.mensagemAvaliacao = "Pelo menos deu pra passar de ano com essa média aí";
      else if(avaliacao < 8) this.mensagemAvaliacao = "Muito bom, tu bem que DÁ para um belo cantor heim!";
      else if(avaliacao < 9) this.mensagemAvaliacao = "Vai com calma meu jovem, assim você humilha a rapazeada!";
      else this.mensagemAvaliacao = "Parabéns! Nisso aqui tu é um monstro sagrado!";
    }, 6000)

    setTimeout(() => {
      this.nota.nativeElement.style.setProperty("--percent", "0.00");
      this.mostrarNota = false;

      if(this.dataSource.length == 0){
        this.videoIdAtual = "";
      }
    }, 20000)
  }
}
