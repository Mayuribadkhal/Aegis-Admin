import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DroppedReasonListComponent } from './dropped-reason-list.component';

describe('DroppedReasonListComponent', () => {
  let component: DroppedReasonListComponent;
  let fixture: ComponentFixture<DroppedReasonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DroppedReasonListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DroppedReasonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
