import { Component, OnInit } from '@angular/core';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent implements OnInit{
  ngOnInit(): void {
    const calendarEl = document.getElementById('calendar');

    if (calendarEl) {
      const calendar = new Calendar(calendarEl, {
        plugins:  [dayGridPlugin],
        initialView: 'dayGridMonth', 
        
      });

      calendar.render();
    }
  }
}

