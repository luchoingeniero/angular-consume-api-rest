import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/auth/login/login.component';
import { PerfilComponent } from './components/auth/perfil/perfil.component';

import { ListComponent as PeopleListComponent } from './components/peoples/list/list.component';
import { CreateComponent as PeopleCreateComponent } from './components/peoples/create/create.component';
import { EditComponent as PeopleEditComponent } from './components/peoples/edit/edit.component';

import { ListComponent as UserListComponent } from './components/users/list/list.component';
import { CreateComponent as UserCreateComponent } from './components/users/create/create.component';
import { EditComponent as UserEditComponent } from './components/users/edit/edit.component';


import { SecureGuard } from './guards/secure.guard';

const routes: Routes = [
  { path: '' , component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [SecureGuard] },
  { path: 'auth/perfil', component: PerfilComponent, canActivate: [SecureGuard] },
  { path: 'peoples', component: PeopleListComponent, canActivate: [SecureGuard] },
  { path: 'peoples/create', component: PeopleCreateComponent, canActivate: [SecureGuard] },
  { path: 'peoples/edit/:id', component: PeopleEditComponent, canActivate: [SecureGuard] },
  { path: 'users', component: UserListComponent, canActivate: [SecureGuard] },
  { path: 'users/create', component: UserCreateComponent, canActivate: [SecureGuard] },
  { path: 'users/edit/:id', component: UserEditComponent, canActivate: [SecureGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
