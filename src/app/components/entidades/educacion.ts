export class Educacion {
    id?:number;
    nivel: string;
    inicio:string;
    fin: string;
    estudio:string;
    
constructor(estudio:string, nivel:string, inicio:string, fin:string){
    this.nivel = nivel;
    this.inicio = inicio;
    this.fin = fin;
    this.estudio = estudio;
}
}
