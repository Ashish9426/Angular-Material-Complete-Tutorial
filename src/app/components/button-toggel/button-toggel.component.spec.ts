import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonToggelComponent } from './button-toggel.component';

describe('ButtonToggelComponent', () => {
  let component: ButtonToggelComponent;
  let fixture: ComponentFixture<ButtonToggelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonToggelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonToggelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
