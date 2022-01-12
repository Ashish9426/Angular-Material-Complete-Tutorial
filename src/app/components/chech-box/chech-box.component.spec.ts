import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChechBoxComponent } from './chech-box.component';

describe('ChechBoxComponent', () => {
  let component: ChechBoxComponent;
  let fixture: ComponentFixture<ChechBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChechBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChechBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
