import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path:'dashboard', component:HeaderComponent,children:[
{path:'home',component:HomeComponent},
{path:'about',component:AboutComponent}]},
{path:'login',component:LoginComponent},
{path:'**',redirectTo:'/dashboard/home',pathMatch:'full'}
];

@NgModule({
  
  imports: [
    BrowserModule,

    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
