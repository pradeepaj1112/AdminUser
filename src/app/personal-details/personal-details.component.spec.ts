import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDetailsComponent } from './personal-details.component';
import { HttpClientModule } from '@angular/common/http';

describe('PersonalDetailsComponent', () => {
  let component: PersonalDetailsComponent;
  let fixture: ComponentFixture<PersonalDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalDetailsComponent],
      imports: [HttpClientModule],
    });
    fixture = TestBed.createComponent(PersonalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
