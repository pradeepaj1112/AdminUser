import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})

export class AuthService {
  private apiUrl = 'api/database/db.json';
  constructor(private http: HttpClient, private router: Router) { }
  login(username: any, password: any) {
    return this.http.post("http://localhost:3000/login", {
      username,
      password
    });
  }
  getUserDetails(username: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?username=${username}`);
  }
  isLoggedIn(): boolean {
    return true; 
  }
  register(data: any) {
    return this.http.post("http://localhost:3000/register", data);
  }
  logout(){
    
  }
  
}