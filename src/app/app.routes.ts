import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AgregarComponent } from './agregar/agregar.component';
import { EstadoComponent } from './estado/estado.component';



export const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "", component: LoginComponent },
  { path: "agregar", component: AgregarComponent },
  { path: "estado", component: EstadoComponent },
  { path: "home", component: HomeComponent },
  { path: "home", component: HomeComponent },

];
