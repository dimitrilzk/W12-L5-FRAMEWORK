import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RegisterAuth } from './register-auth';

export interface AuthData {
  accessToken: string,
  user: {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthService  {

  private isLogin = false;

  constructor(private http: HttpClient) {
    this.restore();
   }

  restore() {
    const userLogin = localStorage.getItem('userLogin');
    if(userLogin) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
  }

  signup(obj: RegisterAuth) {
    //console.log(obj);
    return this.http.post(environment.urlAPI + 'register', obj);
  }

  signin(obj: RegisterAuth) {
    //console.log(obj);
    return this.http.post<AuthData>(environment.urlAPI + 'login', obj).pipe(
      tap((data) => {
        // console.log(data)
        this.isLogin = true;
      })
    )
  }

  getIsLogin() {
    return this.isLogin;
  }
}

