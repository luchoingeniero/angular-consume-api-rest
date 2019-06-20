import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/auth/login/login.component';
import { LogoutComponent } from './components/auth/logout/logout.component';
import { PerfilComponent } from './components/auth/perfil/perfil.component';

import { ListComponent as PeopleListComponent } from './components/peoples/list/list.component';

import { SecureGuard } from './guards/secure.guard';

const routes: Routes = [
  { path: '' , component: LoginComponent },
  { path: 'auth/logout', component: LogoutComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [SecureGuard] },
  { path: 'auth/perfil', component: PerfilComponent, canActivate: [SecureGuard] },
  { path: 'peoples', component: PeopleListComponent, canActivate: [SecureGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
