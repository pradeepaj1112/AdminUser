import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  showAlert: boolean = false;
  isAdmin: boolean = false; 

  constructor(private router: Router, private authService: AuthService) { }

  isValidCredentials(): boolean {
    return this.username.trim() !== '' && this.password.trim() !== '';
  }
  
  login() {
    if (this.isValidCredentials()) {
      const encryptedPassword = this.encryptData(this.password);
      this.authService.login(this.username, encryptedPassword)
        .subscribe(
          (data: any) => {
            this.handleLoginSuccess();
          },
          (error: any) => {
            this.handleLoginError(error.error.message);
          }
        );
    } else {
      this.showAlert = true;
    }
  }
  
  private handleLoginSuccess() {
    this.isAdmin = this.username.toLowerCase().includes('admin');
    const targetRoute = this.isAdmin ? '/dashboard' : '/employee-dashboard';
    this.router.navigate([targetRoute]);
  }
  
  private handleLoginError(errorMessage: string) {
    alert(errorMessage);
  }
  
  validateForm() {
    if (!this.username || !this.password) {
      this.showAlert = true;
    } else {
      this.showAlert = false;
      this.login();
    }
  }

  encryptData(pass: any) {

    try {
      return CryptoJS.AES.encrypt(pass, "Secret engine").toString();
    } catch (e) {
      console.log(e);
      return e;
    }
  }
  
}
