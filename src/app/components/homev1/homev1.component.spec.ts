import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homev1Component } from './homev1.component';

describe('Homev1Component', () => {
  let component: Homev1Component;
  let fixture: ComponentFixture<Homev1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Homev1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Homev1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
