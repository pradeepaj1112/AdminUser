import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  showAlert: boolean = false;
  isAdmin: boolean = false; 
  validateInputerror:boolean =false;
  isPasswordValid(): boolean {
    return this.passwordPattern.test(this.password);
    
  }
  passwordPattern: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

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
            console.log(data)
            localStorage.setItem('access_token', data.data)
          },
          (error: any) => {
            this.handleLoginError(error.error.message);
            localStorage.removeItem('access_token');
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
  validateInput() {
    const email = this.username;
    const gmailPattern = /.+@gmail\.com/;
    this.validateInputerror = !gmailPattern.test(this.username);
  }
  
  ngOnInit(): void {
    
  }
}
