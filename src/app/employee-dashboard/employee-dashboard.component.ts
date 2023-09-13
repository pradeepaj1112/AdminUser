import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { LogoutDialogComponent } from '../logout-dialog/logout-dialog.component';
@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss']
})
export class EmployeeDashboardComponent {
  currentTime: string='';
  constructor( private datepipe:DatePipe,private dialog: MatDialog) {
    this.updateTime(); 
    // setInterval(() => this.updateTime(), 1000);
  }

  updateTime() {
    const now = new Date();
    const formattedTime = this.datepipe.transform(now, 'hh:mm:ss a'); 
    const formattedDate = this.datepipe.transform(now, 'dd MMM yyyy'); 
    this.currentTime = ` ${formattedTime}<br>${formattedDate}`;
  }
  openLogoutDialog(): void {
    const dialogRef = this.dialog.open(LogoutDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        
      }
    });
  }
}
