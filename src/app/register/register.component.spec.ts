import {  TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { AuthService } from '../Service/auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      providers: [AuthService],
      imports: [HttpClientTestingModule, FormsModule],
    });

  });

  it('should create', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const component = fixture.componentInstance;
    
    expect(component).toBeTruthy();
  });
  
});
