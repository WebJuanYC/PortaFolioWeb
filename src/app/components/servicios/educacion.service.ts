import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Educacion } from '../entidades/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  url = 'https://backendweb-bozo.onrender.com/educacion';
  http: any;

  constructor(private httpClient: HttpClient) {}
    getData() {
      return this.http.get('/api/educacion');}
  
    public list(): Observable<Educacion[]> {
    return this.httpClient.get<Educacion[]>(this.url);
  }

  public getById(id: number): Observable<any> {
    return this.httpClient.get<Educacion>(this.url + `/${id}`);
  }

  public save(educacion: Educacion): Observable<any> {
    return this.httpClient.post<any>(this.url, educacion);
  }

  public update(educacion: Educacion): Observable<any> {
    return this.httpClient.put<Educacion>(this.url, educacion);
  }

  public delete(id: number): Observable<Educacion> {
    return this.httpClient.delete<any>(this.url + `/${id}`);

  }
}
