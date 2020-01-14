import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GloriousComponent } from './glorious.component';

describe('GloriousComponent', () => {
  let component: GloriousComponent;
  let fixture: ComponentFixture<GloriousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GloriousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GloriousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
