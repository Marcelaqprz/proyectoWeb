import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreararticulosComponent } from './creararticulos.component';

describe('CreararticulosComponent', () => {
  let component: CreararticulosComponent;
  let fixture: ComponentFixture<CreararticulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreararticulosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreararticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
