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

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'employee-dashboard',component:EmployeeDashboardComponent},
  {path:'calendregister',component:CalenderComponent},
  {path:'employee-details',component:EmployeeDetailsComponent},
  {path:'logout',component:LoginComponent},
  {path:'about',component:AboutComponent},

  {path:'**',component:NotFoundComponent},

  //{ path: 'dashboard', component: DashboardComponent, canActivate: [DashboardGuard] },
  // { path: 'login', component: LoginComponent, canActivate: [LinkValidationGuard] },
  // { path: 'register', component: RegisterComponent, canActivate: [LinkValidationGuard] },
  // { path: 'dashboard', component: DashboardComponent, canActivate: [LinkValidationGuard] },
  // { path: 'employee-dashboard', component: EmployeeDashboardComponent, canActivate: [LinkValidationGuard] },
  // { path: 'logout', component: DashboardComponent, canActivate: [LinkValidationGuard] },
  // { path: 'logout', component: EmployeeDashboardComponent, canActivate: [LinkValidationGuard] },

]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
