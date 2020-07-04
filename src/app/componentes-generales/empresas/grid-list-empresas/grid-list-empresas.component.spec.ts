import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridListEmpresasComponent } from './grid-list-empresas.component';

describe('GridListEmpresasComponent', () => {
  let component: GridListEmpresasComponent;
  let fixture: ComponentFixture<GridListEmpresasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridListEmpresasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridListEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
