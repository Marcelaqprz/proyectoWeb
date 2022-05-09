import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { user } from '../interface/user.interface';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  constructor(private http : HttpClient) 
  { }
  URL = "http://localhost:3000/user"
  getAllUsers( ){
    return this.http.get<user[]>(this.URL + "/getallusers")
  }
  getUserByEmail(emailu : string){
    console.log(emailu)
    let param = new HttpParams().set("email", emailu)
    return this.http.get<user>(this.URL + "/getuseremail", {params: param})
  }
  deleteUser(emailu : string){
    console.log(emailu)
    let param = new HttpParams().set("email", emailu)
    return this.http.delete<user>(this.URL + "/deleteuser", {params: param})
  }
  //upuseremail
  updateUser(data: user){
    console.log(data)
    return this.http.post<any>(this.URL + "/upuseremail", data)
  }

  loginStatus(email: string, password: string){
    console.log(email)
    console.log(password)
    return this.http.post<any>(this.URL + "/login",{email,password} )
  }

}





  

  