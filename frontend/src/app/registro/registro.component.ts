import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { user } from '../interface/user.interface';
import { DatabaseService } from '../services/database.service';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../services/auth.service';
import {ErrorStateMatcher} from '@angular/material/core';
import { formatDate } from '@angular/common';
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class RegistroComponent implements OnInit {
  emailForm = new FormControl('', [Validators.required, Validators.email]);
  matcher = new MyErrorStateMatcher();
  //isLoggedIn = false;

  constructor(private user: DatabaseService,
    private modalService: NgbModal,
    private authservice: AuthService) { }
    email: string = ''
    password: string = ''
    
    value = 0
    dataUser: user = {
    username: '',
    email: '',
    name: '',
    id: Date.now(),
    password: '',
    address: '',
    reg_date: this.getDateFormat(),
    date_birth: '',
    type_user: this.value
  
  }
  ngOnInit(): void {
  }

  open(content) {
    this.modalService.open(content, { centered: true });
  }

  CreateUser(){
    console.log("entra Create The User")
    console.log(this.dataUser)
    this.user.UserCreate(this.dataUser).subscribe({
      next: (response : any) =>{
        console.log(response)
      }
    })
    this.authservice.saveData(this.dataUser)
  }
  getDateFormat() { 
    return formatDate(Date.now(), 'yyyy-MM-dd', 'en-US') 
  }
}
