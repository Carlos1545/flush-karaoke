import { Karaoke } from "./Karaoke";

export interface Pedido {
    _id: string;

    karaoke: Karaoke;
    video_id: string;
    titulo: string,
    data: Date;
    cliente: string;
    avaliacao: number;
    total_avaliacoes: number;
}