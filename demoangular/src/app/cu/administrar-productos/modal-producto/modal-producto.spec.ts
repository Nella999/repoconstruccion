import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalProducto } from './modal-producto';

describe('ModalProducto', () => {
  let component: ModalProducto;
  let fixture: ComponentFixture<ModalProducto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalProducto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalProducto);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('producto', {
      id: 1,
      nombre: 'Laptop Pro',
      precio: 1200,
      disponible: true
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
