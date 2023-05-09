export class Referencia {
    id?: number;
    nombre: string;
    apellido: string;
    cargo: string;
    contacto: string;


    constructor(nombre: string, apellido: string, cargo: string, contacto: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.cargo = cargo;
        this.contacto = contacto;
    }
}
