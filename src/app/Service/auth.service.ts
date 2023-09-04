import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  private apiUrl = 'api/database/db.json';
  private isAuthenticated = false;
  constructor(private http: HttpClient, private router: Router) { }
  login(username: any, password: any) {
    this.isAuthenticated = true
    return this.http.post("http://localhost:3000/login", {
      username,
      password
    });
  }
  getUserDetails(username: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?username=${username}`);
  }
  isAuthenticate(): boolean {
    return this.isAuthenticated;
  }
  register(data: any) {
    return this.http.post("http://localhost:3000/register", data);
  }
  logout() {
    this.isAuthenticated = false
    localStorage.removeItem('access_token');
  }
 

}