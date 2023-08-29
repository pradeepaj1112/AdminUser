import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserDialogComponent } from './user-dialog.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

describe('UserDialogComponent', () => {
  let component: UserDialogComponent;
  let fixture: ComponentFixture<UserDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatDialogModule, FormsModule,MatFormFieldModule,MatSelectModule],
      declarations: [UserDialogComponent],
      providers: [
        // Provide MatDialogRef as a mock value
        { provide: MatDialogRef, useValue: {} }
      ]
    });
    fixture = TestBed.createComponent(UserDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
