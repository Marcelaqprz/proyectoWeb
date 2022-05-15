import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../services/auth.service';
import { FormatService } from '../services/format.service'
import { user } from '../interface/user.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  //styleUrls: ['./creararticulos.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class ProfileComponent implements OnInit {
  value: string[] = this.format.OPTION;
  
  title = 'Proyecto';
  isLoggedIn = false;
  
  dataUser: user = {
    username:'',
    email:'',
    name:'',
    id:0,
    password:'',
    address: '',
    reg_date:'',
    date_birth:'',
    type_user: 0
  }

  constructor(private datauser: DatabaseService,
    private modalService: NgbModal,
    private authservice: AuthService,
    private format: FormatService) { }

  
  ngOnInit(): void {
    this.isLoggedIn = this.authservice.isLoggedIn()
  }
  printUser(){
    console.log(this.dataUser)

  }
  open(content) {
    this.modalService.open(content, { centered: true });
  }

  updateUser(){
    this.datauser.updateUser(this.dataUser).subscribe({
      next: (response : any) =>{
        console.log(response)
      }
    })
  }
}