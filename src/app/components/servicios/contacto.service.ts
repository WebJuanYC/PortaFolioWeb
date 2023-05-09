import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Contacto } from '../entidades/contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
 

  url= 'http://localhost:8080/contacto';
  http: any;

  constructor(private httpClient:HttpClient) { }

  getData() {
    return this.http.get('/api/contacto');}

  public list(): Observable<Contacto[]>{
    return this.httpClient.get<Contacto[]>(this.url);
    }
    
    public getById(id: number):Observable<any>{
      return this.httpClient.get<Contacto>(this.url +  `/${id}`);
    }
    
    public save(contacto: Contacto):Observable<any>{
     return this.httpClient.post<any>(this.url, contacto);
    }
    
    public update(contacto: Contacto):Observable<any>{
     return this.httpClient.put<Contacto>(this.url, contacto);
    }
    
    public delete(id: number):Observable<Contacto>{
     return this.httpClient.delete<any>(this.url +  `/${id}`);
    
    }
}
