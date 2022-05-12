import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.sass'],
})
export class CarritoComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  open(content) {
    this.modalService.open(content, { centered: true });
  }

  openTransaccionFallida(content) {
    this.modalService.open(content, { centered: true });
  }

  mockPayment(content, target) {
    this.modalService.open(content, { centered: true });
    setTimeout(() => {
      this.modalService.dismissAll();
      this.openTransaccionFallida(target);
    }, 2000);
  }

  limpiarCarrito(){
    
  }
}
