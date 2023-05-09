import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IntroService {
  list: any;

  constructor(private httpClient: HttpClient) { }
    
}
