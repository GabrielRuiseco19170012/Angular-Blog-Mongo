import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// Routers
import {APP_ROUTING} from './Routes/router';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/master-components/navbar/navbar.component';
import { LoginComponent } from './components/master-components/login/login.component';
import { RegisterComponent } from './components/master-components/register/register.component';
import { FooterComponent } from './components/master-components/footer/footer.component';
import { SidebarComponent } from './components/master-components/sidebar/sidebar.component';
import { BlogComponent } from './components/blog/blog.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { Page404Component } from './components/wildcards/page404/page404.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    SidebarComponent,
    BlogComponent,
    HomeComponent,
    ProfileComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    APP_ROUTING,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
