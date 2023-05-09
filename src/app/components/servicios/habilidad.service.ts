import { Injectable } from '@angular/core';
import { HabilidadComponent } from '../habilidad/habilidad.component';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Habilidad } from '../entidades/habilidad';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {
  
  url= 'http://localhost:8080/habilidad';
  http: any;

  constructor(private httpClient:HttpClient) { }

  getData() {
    return this.http.get('/api/habilidad');}

  public list(): Observable<Habilidad[]>{
    return this.httpClient.get<Habilidad[]>(this.url);
    }
    
    public getById(id: number):Observable<any>{
      return this.httpClient.get<Habilidad>(this.url + `/${id}`);
    }
    
    public save(habilidad: Habilidad):Observable<any>{
     return this.httpClient.post<any>(this.url, habilidad);
    }
    
    public update(habilidad: Habilidad):Observable<any>{
     return this.httpClient.put<any>(this.url, habilidad);
    }
    
    public delete(id: number):Observable<Habilidad>{
     return this.httpClient.delete<any>(this.url + `/${id}`);
    
   }
}
