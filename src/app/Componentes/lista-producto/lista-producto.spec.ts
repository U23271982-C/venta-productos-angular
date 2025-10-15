import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProducto } from './lista-producto';

describe('ListaProducto', () => {
  let component: ListaProducto;
  let fixture: ComponentFixture<ListaProducto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaProducto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaProducto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
