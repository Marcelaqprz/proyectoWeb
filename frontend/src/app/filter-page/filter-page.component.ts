import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { producto } from '../interface/producto.interface';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-filter-page',
  templateUrl: './filter-page.component.html',
  styleUrls: ['./filter-page.component.sass']
})
export class FilterPageComponent implements OnInit {
  productos: producto[] = []

  constructor(
    private router: ActivatedRoute,
    private database: DatabaseService
  ) { }

  ngOnInit(): void {
    this.getData()
  }

  getData(): void {
    let tag = this.router.snapshot.params['name'];
    this.database.getAllProducts().subscribe(
      {
        next: (response: producto[]) => {
          if (tag == "OFERTA") {
            response.forEach(element => {
              if (element.discount > 0)
                this.productos.push(element)
            });
          }
          else {
            response.forEach(element => {
              if (element.tag == tag)
                this.productos.push(element)
            });
          }
          console.log(this.productos)
        }
      }
    )
  }


}
