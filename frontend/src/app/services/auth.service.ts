import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  saveData(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getData() {
    return JSON.parse(localStorage.getItem('user')!);
  }

  deleteData() {
    localStorage.clear();
  }

  saveAccountNumber(accountNumber: string) {
    localStorage.setItem('numeroCuenta', accountNumber);
  }

  isLoggedIn() {
    return localStorage.getItem('user') ? true : false;
  }
}
