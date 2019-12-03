import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkRequestListComponent } from './work-request-list.component';

describe('WorkRequestListComponent', () => {
  let component: WorkRequestListComponent;
  let fixture: ComponentFixture<WorkRequestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkRequestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
