export class Experiencia {
  id?: number;
  trabajo: string;
  inicio: string;
  puesto: string;
  static Component: any;


constructor(trabajo: string, inicio: string, puesto: string){
  this.trabajo = trabajo;
  this.inicio = inicio;
  this.puesto = puesto;

}
}
