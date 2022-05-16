import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { user } from '../interface/user.interface';
import { producto } from '../interface/producto.interface';
import { carrito } from '../interface/carrito.interface';
import { transaccion } from '../interface/transaccion.interface';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  constructor(private http: HttpClient) { }
  URL = "https://proyectopae2022.herokuapp.com/user"
  getAllUsers() {
    return this.http.get<user[]>(this.URL + "/getallusers")
  }
  getUserByEmail(emailu: string) {
    console.log(emailu)
    let param = new HttpParams().set("email", emailu)
    return this.http.get<user>(this.URL + "/getuseremail", { params: param })
  }
  deleteUser(emailu: string) {
    console.log(emailu)
    let param = new HttpParams().set("email", emailu)
    return this.http.delete<user>(this.URL + "/deleteuser", { params: param })
  }
  //upuseremail
  updateUser(data: user) {
    console.log(data)
    return this.http.post<any>(this.URL + "/upuseremail", data)
  }

  loginStatus(email: string, password: string) {
    console.log(email)
    console.log(password)
    return this.http.post<any>(this.URL + "/login", { email, password })
  }

  getAllProducts() {
    return this.http.get<any>(this.URL + "/getallproducts")
  }
  UserCreate(data: user) {
    console.log(data)
    return this.http.post<user>(this.URL + "/createuser", data)
  }

  getProduct(nombre: string) {
    let param = new HttpParams().set("name", nombre)
    return this.http.get<any>(this.URL + "/getproductname", { params: param })
  }
  CreateProduct(dataProduct: producto){
    return this.http.post<producto>(this.URL + "/createproducts", dataProduct)
  }

  createCompra(compra: transaccion) {
    return this.http.post<any>(this.URL + "/createfactsale", compra)
  }

  createCarrito(carrito: carrito) {
    return this.http.post<any>(this.URL + "/createcarrito", carrito);
  }

}







