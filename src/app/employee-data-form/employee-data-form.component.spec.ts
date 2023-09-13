import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDataFormComponent } from './employee-data-form.component';

describe('EmployeeDataFormComponent', () => {
  let component: EmployeeDataFormComponent;
  let fixture: ComponentFixture<EmployeeDataFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeDataFormComponent]
    });
    fixture = TestBed.createComponent(EmployeeDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
