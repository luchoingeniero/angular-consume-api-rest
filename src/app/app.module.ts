import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatIconModule,
  MatCardModule
} from '@angular/material';

import {MatSnackBarModule} from '@angular/material/snack-bar';


import { LoginComponent } from './components/auth/login/login.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { MainComponent } from './components/layout/main/main.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LogoutComponent } from './components/auth/logout/logout.component';
import { PerfilComponent } from './components/auth/perfil/perfil.component';

import { ListComponent as PeopleListComponent } from './components/peoples/list/list.component';
import { CreateComponent as PeopleCreateComponent } from './components/peoples/create/create.component';
import { EditComponent as PeopleEditComponent } from './components/peoples/edit/edit.component';
import { ShowComponent as PeopleShowComponent } from './components/peoples/show/show.component';

import { ListComponent as UserListComponent } from './components/users/list/list.component';
import { CreateComponent as UserCreateComponent } from './components/users/create/create.component';
import { EditComponent as UserEditComponent } from './components/users/edit/edit.component';
import { ShowComponent as UserShowComponent } from './components/users/show/show.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    DashboardComponent,
    LogoutComponent,
    PerfilComponent,
    PeopleListComponent,
    PeopleCreateComponent,
    PeopleEditComponent,
    PeopleShowComponent,
    UserListComponent,
    UserCreateComponent,
    UserEditComponent,
    UserShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatSnackBarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
