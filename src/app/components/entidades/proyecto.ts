export class Proyecto {
    id?: number;
    trabajo: string;
    img: string;

    constructor( trabajo: string,img:string){
        
        this.trabajo = trabajo;
        this.img = img;
    }
}
