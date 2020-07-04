import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDelDiaComponent } from './menu-del-dia.component';

describe('MenuDelDiaComponent', () => {
  let component: MenuDelDiaComponent;
  let fixture: ComponentFixture<MenuDelDiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuDelDiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuDelDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
