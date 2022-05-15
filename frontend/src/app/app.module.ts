import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { CreararticulosComponent } from './creararticulos/creararticulos.component';
import { GridComponent } from './grid/grid.component';
import { HomeComponent } from './home/home.component';
import { FilterPageComponent } from './filter-page/filter-page.component';
import { CarritoComponent } from './carrito/carrito.component';
//import { AngularFireModule } from '@angular/fire';
import { RegistroComponent } from './registro/registro.component';
import {MatButtonModule} from '@angular/material/button'
import {ProfileComponent} from './profile/profile.component'




@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent, 
    GridComponent, 
    ArticuloComponent, 
    CreararticulosComponent, 
    FilterPageComponent, 
    RegistroComponent,
    CarritoComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    MatChipsModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
