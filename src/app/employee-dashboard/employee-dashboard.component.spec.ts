import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeDashboardComponent } from './employee-dashboard.component';
import { DatePipe } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

describe('EmployeeDashboardComponent', () => {
  let component: EmployeeDashboardComponent;
  let fixture: ComponentFixture<EmployeeDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeDashboardComponent],
      imports:[MatDialogModule],
      providers: [DatePipe],
    });
    fixture = TestBed.createComponent(EmployeeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
