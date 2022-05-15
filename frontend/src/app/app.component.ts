import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from './services/auth.service';
import { DatabaseService } from './services/database.service';
import { producto } from './interface/producto.interface';
import { user } from './interface/user.interface'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  emailForm = new FormControl('', [Validators.required, Validators.email]);
  title = 'frontend';
  isLoggedIn = false;
  productos: producto[] = [];
  email: string = '';
  password: string = '';

  constructor(
    private modalService: NgbModal,
    private authservice: AuthService,
    private user: DatabaseService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authservice.isLoggedIn();
    console.log(this.authservice.isLoggedIn());
    this.getAllProducts();
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

  getAllProducts() {
    this.user.getAllProducts().subscribe({
      next: (response: producto[]) => {
        this.productos = response;
      },
    });
  }

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

  logOutUser() {
    this.authservice.deleteData();
    window.location.reload();
  }
}
