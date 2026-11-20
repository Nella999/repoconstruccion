import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { ViewProductos } from './view-productos';

describe('ViewProductos', () => {
  let component: ViewProductos;
  let fixture: ComponentFixture<ViewProductos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewProductos],
      providers: [provideHttpClient(), provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewProductos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
