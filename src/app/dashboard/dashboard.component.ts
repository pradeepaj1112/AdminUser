import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  count: number = 0;
  //dataSubscription!: Subscription;
  currentTime: string='';
  users:any[]=[];


  constructor(private http: HttpClient, private datepipe:DatePipe) {
    this.updateTime(); 
    setInterval(() => this.updateTime(), 1000);
  }

  ngOnInit():void {
   
   ;
  }

  ngOnDestroy() {
   // this.dataSubscription.unsubscribe();
  }


  updateTime() {
    const now = new Date();
    const formattedTime = this.datepipe.transform(now, 'hh:mm:ss a'); 
    const formattedDate = this.datepipe.transform(now, 'dd MMM yyyy'); // Format date
    this.currentTime = ` ${formattedTime}<br>${formattedDate}`;
  }
  
  }
  
  
  

