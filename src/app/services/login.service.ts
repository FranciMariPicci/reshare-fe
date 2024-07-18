import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginInfo } from '../model/loginInfo.model';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:8080/login'
  private userId : number | undefined;
  constructor(private http: HttpClient) { }


  login(loginInfo : LoginInfo): Observable<any>{
    return from(this.http.post(this.apiUrl, loginInfo));
  }

  createAuthorizationHeader(){
    const token = localStorage.getItem('token');
    if(token){
      return new HttpHeaders({
        'Authorization': 'Bearer ' + token
        });
    }
    console.log("Jwt token Not Found")
    return null;
  }

}