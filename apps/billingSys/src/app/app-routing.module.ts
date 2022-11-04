import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SettingsWindowComponent } from './settings-window/settings-window.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'login', component: LoginPageComponent},
  { path: 'setting', component: SettingsWindowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
