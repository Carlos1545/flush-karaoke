import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, map, throwError } from "rxjs";
import { Karaoke } from "../models/Karaoke";

@Injectable({
    providedIn: 'root'
})
export class KaraokeService {
    karaoke_id: string = "";
    karaoke_nome: string = "";
    temConexao: boolean = false;

    api_url: string = "http://localhost:3000/karaokes";

    constructor(private http: HttpClient) { }

    public getKaraoke(karaokeId: string): Observable<Karaoke>{
        return this.http.get(this.api_url + "/" + karaokeId).pipe(
            catchError(this.handleError),
            map((jsonData: any): Karaoke => {
                this.karaoke_id = jsonData.karaoke._id;
                this.karaoke_nome = jsonData.karaoke.nome;
                return jsonData
            })
        )
    }

    private handleError(error: any): Observable<any>{
        console.error("ERRO NA REQUISIÇÃO => ", error);
        return throwError(() => error);
    }
}