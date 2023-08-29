import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {
  name: string = '';
  EmployeeId: string = '';
  position: string = ''; 
  EmailAddress: string = '';
  validateInputerror: boolean = false;
  password: string = '';
  showAlert: boolean = false;
  employeeIdError: boolean = false;
  isInvalidInput: boolean = false;
  emailFormControl: FormControl = new FormControl('', [Validators.required, Validators.email]);

  constructor(private router: Router, private authService: AuthService) { }

  positions: string[] = ["Software Engineer", "Manager", "Designer","Product Engineer"];

  goToLogin() {
    this.router.navigate(['/login']);
  }
  registrationSuccessful: boolean = false;

  register() {
    this.logEnteredDetails();
    this.registrationSuccessful = true;
  }

  logEnteredDetails() {
    this.authService.register({name: this.name, username: this.EmailAddress, password: this.password ,position:this.position})
      .subscribe((data: any) => {
        alert(data.message)
      }, (error: any) => {
        alert(error.error.message);
      });
  }
  // onEmployeeIdInput() {
  //   this.employeeIdError = !/^\d*$/.test(this.EmployeeId);
  // }
  validateInput() {
    const email = this.EmailAddress;
    const gmailPattern = /.+@gmail\.com/;
    this.validateInputerror = !gmailPattern.test(this.EmailAddress);
    //this.isInvalidInput = email.toLowerCase().includes('admin');
  }
  
}
