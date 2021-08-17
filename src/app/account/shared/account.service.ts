import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  async login(user: any) {
    const result = await this.http.post<any>(`${environment.apiLogin}/Login`, user).toPromise();
    if (result.usuarioAutenticado) {
      window.localStorage.setItem('token', 'autenticado')
      return true;
    } else{
      return false;
    }
  }

  async createAccount(account: any) {
    const result = await this.http.post<any>(`${environment.apiLogin}/IncluirUsuario`, account).toPromise();
    return result;
  }

  getAuthorizationToken() {
    const token = window.localStorage.getItem('token');
    return token;
  }

  isUserLoggedIn() {
    const token = this.getAuthorizationToken();
    if (!token) {
      return false;
    } else {
      return true;
    }

  }
}
