import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomepopupComponent } from './welcomepopup.component';

describe('WelcomepopupComponent', () => {
  let component: WelcomepopupComponent;
  let fixture: ComponentFixture<WelcomepopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomepopupComponent]
    });
    fixture = TestBed.createComponent(WelcomepopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
