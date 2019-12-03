import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ROTypeComponent } from './ro-type.component';

describe('ROTypeComponent', () => {
  let component: ROTypeComponent;
  let fixture: ComponentFixture<ROTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ROTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ROTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
