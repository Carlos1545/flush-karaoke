import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, map, throwError } from "rxjs";
import { Video } from "../models/Video";

@Injectable({
    providedIn: 'root'
})
export class YoutubeService {
    private apiKey: string = "AIzaSyAAg72bXoaZjbzpJCrRn-yqjVyuTUA6nsM";

    constructor(private http: HttpClient) { }

    public listVideosBySearch(searchQuery: string): Observable<Video[]>{
        return this.http.get('https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&part=snippet&q=' + searchQuery + ' Karaokê').pipe(
            catchError(this.handleError),
            map((jsonData: any): Video[] => {
                jsonData.items.map((element: any, i: number) => {
                    element.idVideo = element.id.videoId;
                    element.thumbnailVideo = element.snippet.thumbnails.default.url;
                    element.titulo = element.snippet.title;
                    element.duracao = "0:00";
                    element.tituloCanal = element.snippet.channelTitle;
                });
                return jsonData.items as Video[];
            })
        )
    }

    private handleError(error: any): Observable<any>{
        console.error("ERRO NA REQUISIÇÃO => ", error);
        return throwError(() => error);
    }
}