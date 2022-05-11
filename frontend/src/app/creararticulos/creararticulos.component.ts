import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { producto } from '../interface/producto.interface';
import { DatabaseService } from '../services/database.service';
import { FormControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../services/auth.service';
interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-creararticulos',
  templateUrl: './creararticulos.component.html',
  styleUrls: ['./creararticulos.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class CreararticulosComponent implements OnInit {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  value = '';
  emailForm = new FormControl('', [Validators.required, Validators.email]);
  title = 'Proyecto';
  isLoggedIn = false;
  
  dataProduct: producto = {
    id:             Date.now(),
    name:           '',
    description:    '',
    imageProduct:   '',
    price:          0,
    id_user_seller: 0,
    discount:       0,
    stock:          0,
    tag:            '',
  }

  constructor(private user: DatabaseService,
    private modalService: NgbModal,
    private authservice: AuthService) { }

  
  ngOnInit(): void {
    this.isLoggedIn = this.authservice.isLoggedIn()
  }
  printProduct(){
    console.log(this.dataProduct)

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

}
