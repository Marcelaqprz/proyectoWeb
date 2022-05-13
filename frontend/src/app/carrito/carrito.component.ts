import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { carrito } from '../interface/carrito.interface';
import { producto } from '../interface/producto.interface';
import { CarritoService } from '../services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class CarritoComponent implements OnInit {
  productos: producto[] = []
  constructor(
    private carritoService: CarritoService
  ) { }

  getData() {
    this.productos = this.carritoService.getProductos()
  }

  ngOnInit(): void {
    this.getData()
    this.getTotal()
  }

  suma = 0;

  getTotal() {
    this.productos.forEach(producto => { this.suma += producto.price });
  }

  


}
