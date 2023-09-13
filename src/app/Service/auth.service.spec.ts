import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';


describe('AuthService', () => {


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [AuthService],
    });

    
  });

  it('should be created', () => {
    const service = TestBed.inject(AuthService);
    expect(service).toBeTruthy();
  });
});
