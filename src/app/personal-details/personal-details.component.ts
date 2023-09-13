import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent implements OnInit {
  myForm: FormGroup;
  fullName: string = '';
  EmailAddress: string = '';
  dateOfBirth: string = '';
  gender: string = '';
  fathername: string = '';
  mobilenumber: string = '';
  department: string = '';
  bloodgroup: string = '';
  address: string = '';
  isInvalidInput: boolean = false;
  validateInputError: boolean = false;
  formValid: boolean = false;
  bloodGroupOptions: string[] = ['', 'A+', 'B+', 'O', 'AB', 'B-', 'A-'];


  constructor(private fb: FormBuilder,private router: Router) {
    this.myForm = this.fb.group({
      FullName: ['', Validators.required],
      EmailAddress: ['', [Validators.required, Validators.email]],
      DateOfBirth: ['', Validators.required],
      FatherName: ['', Validators.required],
      inputMobile3: ['', [Validators.required, Validators.pattern("[0-9]{10}")]],
      Department: ['', Validators.required],
      bloodgroup: ['', Validators.required],
      inputAddress3: ['', Validators.required],
      gridRadios: ['', Validators.required]
    });
    
   
  }

  ngOnInit() {}

  onSubmit() {
    if (this.myForm.valid) {
      const formData = this.myForm.value;
      console.log('Entered Details:', formData);
      this.router.navigate(['/employee-data-form']);
      this.myForm.reset();
    } else {
   
    }
    if (this.myForm.valid) {
      const formData = this.myForm.value;
      this.router.navigate(['/employee-data-form'], { queryParams: formData });
      this.myForm.reset();
    }
  }

  validateInput() {
    const gmailPattern = /.+@gmail\.com/;
    this.validateInputError = !gmailPattern.test(this.EmailAddress);
  }


  submit(){
    this.router.navigate(['/employee-data-form']);
    
  }
}