import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatStructureComponent } from './seat-structure.component';

describe('SeatStructureComponent', () => {
  let component: SeatStructureComponent;
  let fixture: ComponentFixture<SeatStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
