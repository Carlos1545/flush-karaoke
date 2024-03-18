import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, map, throwError } from "rxjs";
import { Pedido } from "../models/Pedido";

@Injectable({
    providedIn: 'root'
})
export class KaraokeService {
    karaoke_id: string = "65f7c3793408fcde33e006f8";
    temConexao: boolean = false;
}