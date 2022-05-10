import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class ArticuloComponent implements OnInit {
  @Input() imgSource: string = '';
  @Input() titulo: string = '';
  @Input() precio: string;
  @Input() descripcion: string = '';
  @Input() descuento: string;

  constructor(private modalService: NgbModal, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {}

  open(content) {
    this.modalService.open(content, { centered: true });
  }

  openSnackBar($event) {
    this._snackBar.open('Producto agregado al carrito!', '', {
      duration: 3000,
    });
    $event.stopPropagation();
  }
}
