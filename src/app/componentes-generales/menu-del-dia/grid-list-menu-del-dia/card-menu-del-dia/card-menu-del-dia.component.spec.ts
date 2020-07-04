import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMenuDelDiaComponent } from './card-menu-del-dia.component';

describe('CardMenuDelDiaComponent', () => {
  let component: CardMenuDelDiaComponent;
  let fixture: ComponentFixture<CardMenuDelDiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardMenuDelDiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMenuDelDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
