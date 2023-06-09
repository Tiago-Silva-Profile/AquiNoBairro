import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: 'register', component:RegisterComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'about', component:AboutComponent},
  {path: 'home', component:HomeComponent},
  {path: '', component:HomeComponent},
  // {path: '', redirectTo: 'Home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})


export class AppRouteModule { }
