import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  public productsList(){
    return this.http.get(`${environment.apiFruteira}/ConsultarFrutas`);
  }
}
