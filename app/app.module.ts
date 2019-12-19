import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './site/user-login/user-login.component';
import { UserSignupComponent } from './site/user-signup/user-signup.component';
import { AdminComponent } from './stock/admin/admin.component';
import { ImportExcelComponent } from './stock/admin/import-excel/import-excel.component';
import { UserComponent } from './stock/user/user.component';
import { ManageCompaniesComponent } from './stock/admin/manage-companies/manage-companies.component';
import { ManageExchangeComponent } from './stock/admin/manage-exchange/manage-exchange.component';
import { HeaderComponent } from './site/header/header.component';
import { EditProfileComponent } from './site/edit-profile/edit-profile.component';
import { AuthGuard } from './service/auth.guard';

export const routes: Routes =
  [
    { path: '', component: UserLoginComponent },
    { path: 'admin', component: AdminComponent,canActivate:[AuthGuard] },
    { path: 'signup', component: UserSignupComponent },
    { path: 'user/edit', component: EditProfileComponent,canActivate:[AuthGuard] },
    { path: 'user', component: UserComponent,canActivate:[AuthGuard]},
  ];
@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserSignupComponent,
    AdminComponent,
    ImportExcelComponent,
    UserComponent,
    ManageCompaniesComponent,
    ManageExchangeComponent,
    HeaderComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
