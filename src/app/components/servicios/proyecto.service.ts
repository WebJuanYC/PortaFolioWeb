import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proyecto } from '../entidades/proyecto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  url = 'https://backendweb-bozo.onrender.com/proyecto';
  http: any;


  constructor(private httpClient: HttpClient) { }
  getData() {
    return this.http.get('/api/proyecto');
  }

  public list(): Observable<Proyecto[]> {
    return this.httpClient.get<Proyecto[]>(this.url);
  }

  public getById(id: number): Observable<any> {
    return this.httpClient.get<Proyecto>(this.url + `/${id}`);
  }

  public save(proyecto: Proyecto): Observable<any> {
    return this.httpClient.post<any>(this.url, proyecto);
  }

  public update(proyecto: Proyecto): Observable<any> {
    return this.httpClient.put<Proyecto>(this.url, proyecto);
  }

  public delete(id: number): Observable<Proyecto> {
    return this.httpClient.delete<any>(this.url + `/${id}`);

  }
}
