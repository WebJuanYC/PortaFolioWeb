import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './components/intro/intro.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ErrorComponent } from './components/error/error.component';
import { GuardGuard } from './components/servicios/guard.guard.service';

const routes: Routes = [
  {path: '', component:IntroComponent},
  {path: 'login', component:LoginComponent},
  {path: 'dashboard', component:DashboardComponent, canActivate:[GuardGuard]},
  {path:'**', component:ErrorComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
