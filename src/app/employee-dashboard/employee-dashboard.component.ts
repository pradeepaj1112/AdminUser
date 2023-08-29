import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss']
})
export class EmployeeDashboardComponent {
  currentTime: string='';
  constructor( private datepipe:DatePipe) {
    this.updateTime(); 
    setInterval(() => this.updateTime(), 1000);
  }

  updateTime() {
    const now = new Date();
    const formattedTime = this.datepipe.transform(now, 'hh:mm:ss a'); 
    const formattedDate = this.datepipe.transform(now, 'dd MMM yyyy'); 
    this.currentTime = ` ${formattedTime}<br>${formattedDate}`;
  }
}
