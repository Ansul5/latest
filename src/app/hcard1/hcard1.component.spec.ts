import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hcard1Component } from './hcard1.component';

describe('Hcard1Component', () => {
  let component: Hcard1Component;
  let fixture: ComponentFixture<Hcard1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hcard1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Hcard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
