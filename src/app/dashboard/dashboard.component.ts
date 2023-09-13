import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { LogoutDialogComponent } from '../logout-dialog/logout-dialog.component';
import { Router } from '@angular/router';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  count: number = 0;
  currentTime: string = '';
  users: any[] = [];
  

  constructor(private http: HttpClient, private datepipe: DatePipe,private dialog: MatDialog,private router: Router) {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
  }

  ngOnInit(): void {

  }

  ngOnDestroy() {

  }
    openLogoutDialog(): void {
    const dialogRef = this.dialog.open(LogoutDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.router.navigate(['/login']); 
      }
    });
  }

  updateTime() {
    const now = new Date();
    const formattedTime = this.datepipe.transform(now, 'hh:mm:ss a');
    const formattedDate = this.datepipe.transform(now, 'dd MMM yyyy');
    this.currentTime = ` ${formattedTime}<br>${formattedDate}`;
  }
}
