import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, map, throwError } from "rxjs";
import { Pedido } from "../models/Pedido";

@Injectable({
    providedIn: 'root'
})
export class KaraokeService {
    temConexao: boolean = false;
}