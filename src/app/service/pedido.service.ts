import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, map, throwError } from "rxjs";
import { Pedido } from "../models/Pedido";

@Injectable({
    providedIn: 'root'
})
export class PedidoService {
    api_url: string = "http://localhost:3000/pedidos";

    constructor(private http: HttpClient) { }

    public listarPedidos(karaokeId: string): Observable<Pedido[]>{
        return this.http.get(this.api_url + "/getPedidosByKaraoke/" + karaokeId).pipe(
            catchError(this.handleError),
            map((jsonData: any): Pedido[] => {
                return jsonData
            })
        )
    }

    private handleError(error: any): Observable<any>{
        console.error("ERRO NA REQUISIÇÃO => ", error);
        return throwError(() => error);
    }
}