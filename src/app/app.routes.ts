import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AgregarComponent } from './agregar/agregar.component';
import { EstadoComponent } from './estado/estado.component';
import { AjustesComponent } from './ajustes/ajustes.component';

export const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "agregar", component: AgregarComponent },
  { path: "estado", component: EstadoComponent },
  { path: "login", component: LoginComponent },
  { path: "ajustes", component: AjustesComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }

];
