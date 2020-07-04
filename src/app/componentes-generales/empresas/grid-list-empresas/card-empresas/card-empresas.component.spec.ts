import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEmpresasComponent } from './card-empresas.component';

describe('CardEmpresasComponent', () => {
  let component: CardEmpresasComponent;
  let fixture: ComponentFixture<CardEmpresasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardEmpresasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
