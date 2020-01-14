import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoyfulComponent } from './joyful.component';

describe('JoyfulComponent', () => {
  let component: JoyfulComponent;
  let fixture: ComponentFixture<JoyfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoyfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoyfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
