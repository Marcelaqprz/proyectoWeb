import { Component, OnInit, VERSION } from '@angular/core';
import dataArticulos from '../../assets/data/data.json';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.sass'],
})
export class GridComponent implements OnInit {
  ngVersion: string = VERSION.full;
  breakpoint: number | undefined;
  data = dataArticulos;
  constructor() {}

  ngOnInit(): void {
    let target: number = 5;
    if (window.innerWidth <= 1600) target = 5;
    if (window.innerWidth <= 1400) target = 5;
    if (window.innerWidth <= 1200) target = 3;
    if (window.innerWidth <= 900) target = 2;
    if (window.innerWidth <= 750) target = 1;

    this.breakpoint = target;
  }
  onResize(event) {
    let target: number = 5;
    if (event.target.innerWidth <= 1200) target = 3;
    if (event.target.innerWidth <= 900) target = 2;
    if (event.target.innerWidth <= 750) target = 1;

    this.breakpoint = target;
  }
}
