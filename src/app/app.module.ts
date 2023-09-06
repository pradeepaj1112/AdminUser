import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatCardModule } from '@angular/material/card'; 
import { MatInputModule } from '@angular/material/input'; 
import { MatButtonModule } from '@angular/material/button'; 
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './Service/auth.service';
import { DatePipe } from '@angular/common';
import { CalenderComponent } from './calender/calender.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { IonicModule } from '@ionic/angular';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './guards/authguard.guard';
import { LogoutDialogComponent } from './logout-dialog/logout-dialog.component';
import { FooterComponent } from './footer/footer.component';
import { MatDatepickerModule } from '@angular/material/datepicker'; // Import for date picker
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    EmployeeDashboardComponent,
    CalenderComponent,
    EmployeeDetailsComponent,
    UserDialogComponent,
    NotFoundComponent,
    HeaderComponent,
    LogoutDialogComponent,
    AboutComponent,
    FooterComponent,

 

  ],
  imports: [
  
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    FormsModule,
    MatCardModule, 
    MatInputModule, 
    MatButtonModule ,
    ReactiveFormsModule,
    HttpClientModule,
    IonicModule,
    MatDialogModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule, 
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    
  ],
  providers: [
    AuthService,
    DatePipe,
    AuthGuard,
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
