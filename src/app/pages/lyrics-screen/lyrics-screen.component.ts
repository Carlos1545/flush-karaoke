import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Pedido } from 'src/app/models/Pedido';
import { KaraokeService } from 'src/app/service/karaoke.service';
import { PedidoService } from 'src/app/service/pedido.service';

@Component({
  selector: 'app-lyrics-screen',
  templateUrl: './lyrics-screen.component.html',
  styleUrls: ['./lyrics-screen.component.css']
})
 export class LyricsScreenComponent implements OnInit, AfterViewInit{
  @ViewChild("youTubePlayer")
  youTubePlayer!: ElementRef<HTMLDivElement>;
  playerVars = {
    autoplay: 1
  }
  
  dataSource: Pedido[] = [];
  displayedColumns: string[] = ['titulo', 'cliente'];

  videoIdAtual: string = ""
  intervalLoopPrincipal: any;

  
  videoHeight: number | undefined;
  videoWidth: number | undefined;

  constructor(
    private pedidoService: PedidoService,
    private karaokeService: KaraokeService,
    private changeDetectorRef: ChangeDetectorRef
  ){}

  ngOnInit(): void {
    this.getListagemPedidos();
    this.buscaPedidos();
  }

  ngAfterViewInit(): void {
    this.onResize();
    window.addEventListener('resize', this.onResize.bind(this));
  }

  private onResize(): void {
    // you can remove this line if you want to have wider video player than 1200px
    this.videoWidth = this.youTubePlayer.nativeElement.clientWidth;
    // so you keep the ratio
    this.videoHeight = this.youTubePlayer.nativeElement.clientHeight - 75;
    this.changeDetectorRef.detectChanges();
  }

  private buscaPedidos(){
    this.intervalLoopPrincipal = setInterval(() => this.getListagemPedidos(), 10000)
  }

  private getListagemPedidos(): void {
    this.pedidoService.listarPedidos(this.karaokeService.karaoke_id).subscribe({
      next: (results: any) => {
        this.dataSource = results.pedidos        
        if(this.dataSource.length > 0){
          clearInterval(this.intervalLoopPrincipal);

          this.playMusic(this.dataSource[0]);
        }else{
          this.buscaPedidos();
        }
      },
      error: err => console.error(err),
      complete: () => {
        //this.getListagemPedidos();
      }
    })
  }

  private playMusic(pedido: any) {
    this.videoIdAtual = pedido.video_id;    
  }

  public stateChangeYoutubePlayer(event: any){
    debugger
    if(event.data == -1){ // video carregado
      // dar play no video
    }
    if(event.data == 0){ // video encerrado
      let pedido: Pedido | undefined = this.dataSource.shift();
      this.dataSource = this.dataSource.slice();
      if(pedido) {
        this.pedidoService.removerPedido(pedido._id).subscribe({
          next: result => {
            console.log("removido: ", result);
          },
          error: err => console.error(err)
        })
      }

      if(this.dataSource.length > 0){
        this.playMusic(this.dataSource[0])
      }else{
        this.buscaPedidos();
      }
    }
  }
}
