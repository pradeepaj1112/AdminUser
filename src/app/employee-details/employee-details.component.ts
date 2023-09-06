import { Component, OnInit } from '@angular/core';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent  implements OnInit{

  constructor(public dialog: MatDialog,private http: HttpClient) {}
  ngOnInit(){
    this.http.get('db.json').subscribe((data: any) => {
    this.employeeDetails = data.auth; // Assuming your JSON structure has an "auth" array
  });
}
  employeeDetails: any[] = [];
  openUserDialog() {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.employeeDetails.push(result);
      }
    });
  }
}

