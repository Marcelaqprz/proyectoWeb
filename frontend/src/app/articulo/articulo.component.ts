import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { producto } from '../interface/producto.interface';
import { CarritoService } from '../services/carrito.service';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class ArticuloComponent implements OnInit {
  @Input() producto: producto
  @Input() imgSource: string = '';
  @Input() titulo: string = '';
  @Input() precio: string;
  @Input() descripcion: string = '';
  @Input() descuento: string;

  constructor(
    private modalService: NgbModal, 
    private _snackBar: MatSnackBar,
    private carritoService: CarritoService,
  ) { }

  ngOnInit(
  ): void { }

  open(content) {
    this.modalService.open(content, { centered: true });
  }

  openSnackBar($event) {
    this.carritoService.addProduct(this.producto);
    this._snackBar.open('Producto agregado al carrito!', '', {
      duration: 3000,
    });
    $event.stopPropagation();
    
  }
}
