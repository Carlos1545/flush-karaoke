import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, map, throwError } from "rxjs";
import { Pedido } from "../models/Pedido";

@Injectable({
    providedIn: 'root'
})
export class PedidoService {
    api_url: string = "http://localhost:3000/pedidos";

    private apiKey: string = "AIzaSyAAg72bXoaZjbzpJCrRn-yqjVyuTUA6nsM";

    constructor(private http: HttpClient) { }

    public listarPedidos(karaokeId: string): Observable<Pedido[]>{
        return this.http.get(this.api_url + "/getPedidosByKaraoke/" + karaokeId).pipe(
            catchError(this.handleError),
            map((jsonData: any): Pedido[] => {
                jsonData.pedidos.map((element: any) => {
                    // TODO: Remover essa maneira de puxar os vídeos e puxar os títulos direto na criação de novo pedido
                    this.getTituloByVideoId(element.video_id).subscribe({
                        next: res => element.titulo = res,
                        error: err => console.error(err)
                    });
                    return element;
                })
                return jsonData
            })
        )
    }

    public criarPedido(karaokeId: string, videoId: string, nomeCliente: string): Observable<void>{
        const data = {
            "karaoke_id": karaokeId,
            "video_id": videoId,
            "cliente": nomeCliente
        }
        return this.http.post(this.api_url, data).pipe(
            catchError(this.handleError)
        )
    }

    public avaliarPedido(pedidoId: string, nota: number): Observable<void>{
        const data = {
            "avaliacao": nota,
        }
        return this.http.patch(this.api_url + "/avaliar/" + pedidoId, data).pipe(
            catchError(this.handleError)
        )
    }

    private getTituloByVideoId(videoId: string): Observable<string>{
        return this.http.get("https://www.googleapis.com/youtube/v3/videos?key=" + this.apiKey + "&part=snippet&id=" + videoId).pipe(
            catchError(this.handleError),
            map((jsonData: any): string => {
                return jsonData.items[0].snippet.title || "";
            })
        )
    }
    
    private handleError(error: any): Observable<any>{
        console.error("ERRO NA REQUISIÇÃO => ", error);
        return throwError(() => error);
    }
}