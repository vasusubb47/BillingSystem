import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SettingsComponent } from './side-bar/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginPageComponent,
    HomePageComponent,
    SideBarComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
