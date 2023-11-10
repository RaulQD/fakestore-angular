import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environments } from 'src/environments/environments';
import { AuthStatus } from '../interface/auth-status.enum';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { User } from '../interface/user.interace';
import { Login, LoginResponse } from '../interface/login-response.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly apiUrl: string = environments.API_URL;
  private http = inject(HttpClient);
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  private _authStatus = AuthStatus.checking;
  public authStatus = this._authStatus;

  /* The `login` method in the `LoginService` class is responsible for making a POST request to the
  login endpoint of the API. It takes a `login` object as a parameter, which contains the user's
  login credentials. */
  login(login: Login): Observable<boolean> {
    return this.http
      .post<LoginResponse>(`${this.apiUrl}/auth/login`, login, {
        headers: this.httpHeaders
      })
      .pipe(
        tap(({ access_token, refresh_token }) => {
          localStorage.setItem('token', access_token);
          localStorage.setItem('refresh_token', refresh_token);
          this.authStatus = AuthStatus.authenticated;
          console.log({ access_token, refresh_token })
        }),
        map(() => true),
        //TODO ERRORS
        catchError(err => throwError(() => console.log(err)))
      )
  }

}
