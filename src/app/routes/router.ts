import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../components/master-components/login/login.component';
import {RegisterComponent} from '../components/master-components/register/register.component';
import {BlogComponent} from '../components/blog/blog.component';
import {HomeComponent} from '../components/home/home.component';
import {ProfileComponent} from '../components/profile/profile.component';
import {Page404Component} from '../components/wildcards/page404/page404.component';

const APP_ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'blog', component: BlogComponent},
  {path: '**', pathMatch: 'full', component: Page404Component}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
