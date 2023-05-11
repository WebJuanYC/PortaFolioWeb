import { Injectable } from '@angular/core';
import { Experiencia } from '../entidades/experiencia';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  url = 'https://backendweb-bozo.onrender.com/experiencia';
  http: any;


  constructor(private httpClient: HttpClient) { }

  getData() {
    return this.http.get('/api/experiencia');
  }

  public list(): Observable<Experiencia[]> {
    return this.httpClient.get<Experiencia[]>(this.url);
  }

  public getById(id: number): Observable<any> {
    return this.httpClient.get<Experiencia>(this.url + `/${id}`);
  }

  public save(experiencia: Experiencia): Observable<any> {
    return this.httpClient.post<any>(this.url, experiencia);
  }

  public update(experiencia: Experiencia): Observable<any> {
    return this.httpClient.put<Experiencia>(this.url, experiencia);
  }

  public delete(id: number): Observable<Experiencia> {
    return this.httpClient.delete<any>(this.url + `/${id}`);

  }
}
