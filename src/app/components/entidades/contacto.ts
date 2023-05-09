export class Contacto {
    id?:number;
    correo: string;
    telefono:string;
    img: string;
    frase:string;
    titulo:string;

constructor(correo:string, telefono:string, img:string, frase:string, titulo:string){
    this.correo = correo;
    this.telefono = telefono;
    this.img = img;
    this.frase = frase;
    this.titulo = titulo;

}
}
