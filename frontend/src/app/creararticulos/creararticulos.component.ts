import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { producto } from '../interface/producto.interface';
import { DatabaseService } from '../services/database.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../services/auth.service';
import { FormatService } from '../services/format.service'

@Component({
  selector: 'app-creararticulos',
  templateUrl: './creararticulos.component.html',
  styleUrls: ['./creararticulos.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class CreararticulosComponent implements OnInit {
  value: string[] = this.format.OPTION;
  
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
    tag:            'HOMBRE',
  }

  constructor(private dataproduct: DatabaseService,
    private modalService: NgbModal,
    private authservice: AuthService,
    private format: FormatService) { }

  
  ngOnInit(): void {
    this.isLoggedIn = this.authservice.isLoggedIn()
  }
  printProduct(){
    console.log(this.dataProduct)

  }
  open(content) {
    this.modalService.open(content, { centered: true });
  }

  CreateProduct(){
    this.dataproduct.CreateProduct(this.dataProduct).subscribe({
      next: (response : any) =>{
        console.log(response)
      }
    })
  }

  

}
