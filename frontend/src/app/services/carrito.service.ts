import { Injectable } from '@angular/core';
import { carrito } from '../interface/carrito.interface';
import { producto } from '../interface/producto.interface';
import { transaccion } from '../interface/transaccion.interface';
import { user } from '../interface/user.interface';
import { AuthService } from './auth.service';
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor(
    private database: DatabaseService,
    private auth: AuthService
  ) { }

  carrito: carrito = {
    cant_list: [], 
    id_user_buyer:0,
    idcarrito:0,
    product_list:[]
  }

  addProduct(producto: producto) {
    console.log(producto);
    this.carrito.product_list.push(producto);
    this.carrito.cant_list.push(1);
  }

  createCompra(): void {
    let user = this.auth.getData()
    this.carrito.idcarrito = Date.now();
    this.carrito.id_user_buyer = user.id;

    this.database.createCompra(this.generateFactSale(this.carrito, user)).subscribe(
      {
        next: (response: any) => {
          console.log(response)
        }
      }
    )

    this.database.createCarrito(this.carrito).subscribe(
      {
        next: (response: any) => {
          console.log(response)
        }
      }
    )
  }

  private generateFactSale(carrito: carrito, user: user): transaccion {
    let compra: transaccion
    compra.id_transaccion = Date.now();
    compra.id_carrito = carrito.idcarrito
    compra.id_user_buyer = user.id
    compra.subtotal = 0;
    compra.total = 0;
    carrito.product_list.forEach(element => {
      compra.subtotal += element.price
    });

    compra.total = compra.subtotal * 1.16
    return compra
  }

  getProductos() {
    console.log(this.carrito.product_list)
    return this.carrito.product_list
  }
}
