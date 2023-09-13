import { Component, OnInit } from '@angular/core';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  employeeDetails: any[] = [];

  constructor(public dialog: MatDialog, private http: HttpClient) {}

  ngOnInit() {
    this.http.get('api/database/db.json').subscribe((data: any) => {
      this.employeeDetails = data.auth;
    });
    
  }

  openUserDialog() {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Assuming 'result' contains the new employee data
        // Send a POST request to save it on the server
        this.http.post('http://localhost:3000/employees', result).subscribe(response => {
          this.employeeDetails.push(response);
        });
      }
    });
  }
}
