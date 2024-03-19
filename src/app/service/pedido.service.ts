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
                return jsonData
            })
        )
    }

    public criarPedido(karaokeId: string, videoId: string, nomeCliente: string, titulo: string): Observable<void>{
        const data = {
            "karaoke_id": karaokeId,
            "video_id": videoId,
            "cliente": nomeCliente,
            "titulo": titulo
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

    public removerPedido(pedidoId: string): Observable<Pedido>{
        return this.http.delete(this.api_url + "/" + pedidoId).pipe(
            catchError(this.handleError),
            map((jsonData: any): Pedido => {
                return jsonData
            })
        )
    }
    
    private handleError(error: any): Observable<any>{
        console.error("ERRO NA REQUISIÇÃO => ", error);
        return throwError(() => error);
    }
}