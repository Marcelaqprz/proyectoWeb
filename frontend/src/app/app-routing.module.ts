import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './carrito/carrito.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { FilterPageComponent } from './filter-page/filter-page.component';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';
import {CreararticulosComponent} from './creararticulos/creararticulos.component'
import {ProfileComponent} from './profile/profile.component'

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'articulo/:name', component: ArticuloComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'filer/:name', component: FilterPageComponent },
  {path: 'crearproducto', component: CreararticulosComponent},
  { path: 'carrito', component: CarritoComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }