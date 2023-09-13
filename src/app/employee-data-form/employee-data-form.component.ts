import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-data-form',
  templateUrl: './employee-data-form.component.html',
  styleUrls: ['./employee-data-form.component.scss']
})
export class EmployeeDataFormComponent {
  submittedData: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.submittedData = params;
    });
  }

}
