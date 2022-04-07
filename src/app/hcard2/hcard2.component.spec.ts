import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hcard2Component } from './hcard2.component';

describe('Hcard2Component', () => {
  let component: Hcard2Component;
  let fixture: ComponentFixture<Hcard2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hcard2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Hcard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
