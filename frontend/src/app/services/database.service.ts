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
    let header = new HttpParams().set("email", emailu)
    return this.http.get<user>(this.URL + "/getuseremail", {params: header})
  }

}





  

  