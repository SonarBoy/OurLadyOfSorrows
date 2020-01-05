import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuminousComponent } from './luminous.component';

describe('LuminousComponent', () => {
  let component: LuminousComponent;
  let fixture: ComponentFixture<LuminousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuminousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuminousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
