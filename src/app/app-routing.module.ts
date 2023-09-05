import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { CalenderComponent } from './calender/calender.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { AuthGuard } from './guards/authguard.guard';
import { LogoutDialogComponent } from './logout-dialog/logout-dialog.component';


const routes: Routes = [
  {path:'',component:LoginComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]},
  {path:'employee-dashboard',component:EmployeeDashboardComponent,canActivate:[AuthGuard]},
  {path:'calender',component:CalenderComponent,canActivate:[AuthGuard]},
  {path:'employee-details',component:EmployeeDetailsComponent,canActivate:[AuthGuard]},
  {path:'personal-details',component:PersonalDetailsComponent,canActivate:[AuthGuard]},
  {path:'about',component:AboutComponent,canActivate:[AuthGuard]},
  {path:'logout',component:LoginComponent,canActivate:[AuthGuard]},
  {path:'logout-dialog',component:LogoutDialogComponent,canActivate:[AuthGuard]},
  {path:'**',component:NotFoundComponent}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
