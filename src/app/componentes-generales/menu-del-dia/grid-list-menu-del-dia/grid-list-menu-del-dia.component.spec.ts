import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridListMenuDelDiaComponent } from './grid-list-menu-del-dia.component';

describe('GridListMenuDelDiaComponent', () => {
  let component: GridListMenuDelDiaComponent;
  let fixture: ComponentFixture<GridListMenuDelDiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridListMenuDelDiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridListMenuDelDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
