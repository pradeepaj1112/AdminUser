import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgModel } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<UserDialogComponent>
  ) {}
  

  ngOnInit(): void {
   
  }
  @Output() employeeAdded = new EventEmitter<any>();
  name: string = '';
  email: string = '';
  position: string = '';
  employeeDetails: any = [];
  positions: string[] = ["Software Engineer", "Manager", "Designer", "Product Engineer","Administrator"];

  get formValid() {
    return this.name && this.email && this.position;
  }
  onSubmit() {
    const newEmployee = {
      name: this.name,
      email: this.email,
      position: this.position
    };
    this.employeeAdded.emit(newEmployee);
    this.dialogRef.close(newEmployee);
  }
    clearFields() {
      this.name = '';
      this.email = '';
      this.position = '';
    }
    closeModal(): void {
      this.dialogRef.close();
    }
    isEmailInvalid(emailInput: NgModel) {
      return emailInput?.invalid && emailInput?.dirty;
  }

  }
