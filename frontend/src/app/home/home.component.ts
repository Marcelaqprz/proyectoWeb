import { Component, OnInit } from '@angular/core';
import { user } from '../interface/user.interface';
import { DatabaseService } from '../services/database.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private user: DatabaseService) { }
  email: string = ''
  ngOnInit(): void {
  }

  getAllUsers() {
    console.log("entra Get All Users")

    this.user.getAllUsers().subscribe(
      {
        next: (response: any) => {
          console.log(response)
        }
      }
    )
  }
  getUserByEmail(){
    console.log("entra Get User By Email")
    console.log(this.email)
    this.user.getUserByEmail(this.email).subscribe({
      next: (response: user) =>{
        console.log(response)
      }
    })
  }
  /*getjsonUser() {
    console.log("entra_JSON")
    this.user.getJsonName().subscribe({
      next: (Response: any) =>{
        console.log(Response)
      }
    })

  }*/

}
