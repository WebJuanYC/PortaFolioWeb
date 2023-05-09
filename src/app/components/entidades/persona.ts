export class Persona {
    id?: number;
    nombre: string;
    apellido: string;
    url_banner: string;
    foto_perfil: string;
    acerca: string;
    email: string;
    password: string;
    frase: string;


    constructor(nombre: string, apellido: string, url_banner: string, foto_perfil: string, acerca: string, email: string, password: string, frase: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.url_banner = url_banner;
        this.foto_perfil = foto_perfil;
        this.acerca = acerca;
        this.email = email;
        this.password = password;
        this.frase = frase;
    }
}
