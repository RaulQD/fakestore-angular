import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from 'src/environments/environments';
import { User } from '../interface/user.interace';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly apiUrl: string = environments.API_URL;
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  private http = inject(HttpClient);

  registerUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/users/`, user, { headers: this.httpHeaders });
  }
}
