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
  password: string = ''
  dataUser: user={
    username:   '',
    email:      '',
    name:       '',
    id:         1,
    password:   '',
    address:    '',
    reg_date:   '',
    date_birth: '',
    type_user:  0

  }
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
  deleteUserByEmail(){
    console.log("entra Delete User By Email")
    console.log(this.email)
    this.user.deleteUser(this.email).subscribe({
      next: (response : user) =>{
        console.log(response)
      }
    })
  }
  updateTheUser(){
    console.log("entra Update The User")
    this.user.updateUser(this.dataUser).subscribe()
  }
  loginStatusUser(){
    console.log("entra Login Status User")
    this.user.loginStatus(this.email, this.password).subscribe({
        next: (response : any) =>{
          console.log(response)
        }
      }
    )
  }

}
