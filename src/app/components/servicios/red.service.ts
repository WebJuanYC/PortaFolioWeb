import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Red } from '../entidades/red';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RedService {
  
  url= 'https://backendweb-bozo.onrender.com/red';
  http: any;

  constructor(private httpClient:HttpClient) { }

  getData() {
    return this.http.get('/api/red');}
  
   
      public list(): Observable<Red[]>{
      return this.httpClient.get<Red[]>(this.url);
      }
      
      public getById(id: number):Observable<any>{
        return this.httpClient.get<Red>(this.url + `/${id}`);
      }
      
      public save(red: Red):Observable<any>{
       return this.httpClient.post<any>(this.url, red);
      }
      
      public update(red: Red):Observable<any>{
       return this.httpClient.put<Red>(this.url, red);
      }
      
      public delete(id: number):Observable<Red>{
       return this.httpClient.delete<any>(this.url + `/${id}`);
      
      }
}
