import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticuloComponent } from './articulo/articulo.component';
import { CarritoComponent } from './carrito/carrito.component';
import { GoogleLoginComponent } from './google-login/google-login.component';
import { HomeComponent } from './home/home.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'articulo/:name', component: ArticuloComponent},
  {path: 'carrito' , component: CarritoComponent},
  {path: 'registroUsuario' , component: RegistroUsuarioComponent},
  {path: 'google/login' , component: GoogleLoginComponent},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }