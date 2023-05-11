import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../entidades/persona';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  
  url= 'https://backendweb-bozo.onrender.com/persona';
  http: any;


  constructor(private httpClient: HttpClient) {}
  getData() {
    return this.http.get('/api/persona');}
  
    public list(): Observable<Persona[]>{
      return this.httpClient.get<Persona[]>(this.url);
      }
      
      public getById(id: number):Observable<any>{
        return this.httpClient.get<Persona>(this.url + `/${id}`);
      }
      
      public save(persona: Persona):Observable<any>{
       return this.httpClient.post<any>(this.url, persona);
      }
      
      public update(persona: Persona):Observable<any>{
       return this.httpClient.put<Persona>(this.url, persona);
      }
      
      public delete(id: number):Observable<Persona>{
       return this.httpClient.delete<any>(this.url + `/${id}`);
      
      }
    
      
}
