import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SorrowfulComponent } from './sorrowful.component';

describe('SorrowfulComponent', () => {
  let component: SorrowfulComponent;
  let fixture: ComponentFixture<SorrowfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SorrowfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SorrowfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
