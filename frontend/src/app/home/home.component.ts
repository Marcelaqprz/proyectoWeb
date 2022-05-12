import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { user } from '../interface/user.interface';
import { DatabaseService } from '../services/database.service';
import { FormControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../services/auth.service';
import axios from 'axios';
@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  emailForm = new FormControl('', [Validators.required, Validators.email]);
  title = 'Proyecto';
  isLoggedIn = false;
  @Input() frase: String = '';

  constructor(
    private user: DatabaseService,
    private modalService: NgbModal,
    private authservice: AuthService
  ) {}

  email: string = '';
  password: string = '';
  dataUser: user = {
    username: '',
    email: '',
    name: '',
    id: 1,
    password: '',
    address: '',
    reg_date: '',
    date_birth: '',
    type_user: 0,
  };
  ngOnInit(): void {
    this.isLoggedIn = this.authservice.isLoggedIn();
    const options = {
      method: 'POST',
      url: 'https://andruxnet-random-famous-quotes.p.rapidapi.com/',
      params: { cat: 'movies', count: '1' },
      headers: {
        'X-RapidAPI-Host': 'andruxnet-random-famous-quotes.p.rapidapi.com',
        'X-RapidAPI-Key': 'fe65570658mshf2255ace942242cp1a12c2jsn8a2636443fca',
      },
    };
    axios
      .request(options)
      .then(function (response) {
        document.getElementById('fraseAPI').innerHTML = response.data[0].quote;
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  open(content) {
    this.modalService.open(content, { centered: true });
  }

  getErrorMessage() {
    if (this.emailForm.hasError('required')) {
      return 'Ingresa un correo';
    }

    return this.emailForm.hasError('email') ? 'No es un correo valido!' : '';
  }
  logOutUser() {
    this.authservice.deleteData();
    window.location.reload();
  }
  /*  getAllUsers() {
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
   */
  async loginStatusUser() {
    console.log('entra Login Status User');
    await this.user.loginStatus(this.email, this.password).subscribe({
      next: (response: user) => {
        console.log(response);
        this.authservice.saveData(response);
        window.location.reload();
      },
    });
  }
}
