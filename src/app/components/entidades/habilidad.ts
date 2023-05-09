export class Habilidad {
    id?: number;
    porcentaje: string;
    habilidad: string;
    color: string;

constructor(porcentaje: string, habilidad: string, color: string) {
        this.porcentaje = porcentaje;
        this.habilidad = habilidad;
        this.color = color;
}
}
