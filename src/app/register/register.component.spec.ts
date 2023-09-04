import {  TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { AuthService } from '../Service/auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  // let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      providers: [AuthService], // Provide AuthService here if required
      imports: [HttpClientTestingModule, FormsModule],
    });
    // fixture = TestBed.createComponent(RegisterComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const component = fixture.componentInstance;
    // console.log(component); 
    expect(component).toBeTruthy();
  });
  
});
