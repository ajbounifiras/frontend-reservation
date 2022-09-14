import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Resrvation1Component } from './resrvation1.component';

describe('Resrvation1Component', () => {
  let component: Resrvation1Component;
  let fixture: ComponentFixture<Resrvation1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Resrvation1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Resrvation1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
