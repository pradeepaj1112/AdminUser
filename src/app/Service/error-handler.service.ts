// error-handler.service.ts

import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {
    constructor(private router: Router, private authService: AuthService) { }
  handleUnauthorizedError(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  // You can add more error handling methods as needed
}
