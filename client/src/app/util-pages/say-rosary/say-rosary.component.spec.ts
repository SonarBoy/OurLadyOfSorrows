import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SayRosaryComponent } from './say-rosary.component';

describe('SayRosaryComponent', () => {
  let component: SayRosaryComponent;
  let fixture: ComponentFixture<SayRosaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SayRosaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SayRosaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
