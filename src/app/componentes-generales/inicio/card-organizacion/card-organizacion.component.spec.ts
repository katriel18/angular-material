import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOrganizacionComponent } from './card-organizacion.component';

describe('CardOrganizacionComponent', () => {
  let component: CardOrganizacionComponent;
  let fixture: ComponentFixture<CardOrganizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardOrganizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardOrganizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
