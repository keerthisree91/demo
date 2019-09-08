import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable()
export class AuthenticationService {
  loggedIn: boolean;
    constructor(private http: HttpClient,  private router: Router) { }

    login(login: any) {
        const data = {
          loginName: login.username,
          password: login.password,
          };
       /*  const headers = new HttpHeaders();
        headers = headers.append('Accept', 'application/json'); */
        const formData: FormData = new FormData();
        formData.append('loginName', login.username);
        formData.append('password', login.password);
        console.log(login.username);
        console.log(login.password);
      /*   let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Accept', 'application/json'); */
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST',
          })
        };
        localStorage.setItem('username', login.username);
        localStorage.setItem('password', login.password);
        localStorage.setItem('isLoggedIn', 'true');

       // const body = 'loginName=' + login.username + '&password=' + login.password;
       // const  params = new  HttpParams().set('loginName', login.username ).set('password', login.password );
      //  return this.http.post<any>(`https://firstqa.smartdocsonline.com/server/user/api/v6.6/auth/login`, formData, httpOptions);
      //  this.router.navigate(['/createjob']);
        console.log(localStorage.getItem('isLoggedIn'));
        }
    logout() {
      console.log('inside logout of service');
      localStorage.removeItem('username');
      localStorage.removeItem('password');
      localStorage.removeItem('isLoggedIn');
      this.router.navigate(['/login']);
    }
}
