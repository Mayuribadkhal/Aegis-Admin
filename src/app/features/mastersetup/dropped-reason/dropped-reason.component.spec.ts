import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DroppedReasonComponent } from './dropped-reason.component';

describe('DroppedReasonComponent', () => {
  let component: DroppedReasonComponent;
  let fixture: ComponentFixture<DroppedReasonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DroppedReasonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DroppedReasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
