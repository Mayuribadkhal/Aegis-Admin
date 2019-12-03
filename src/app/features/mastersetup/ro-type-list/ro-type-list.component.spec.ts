import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ROTypeListComponent } from './ro-type-list.component';

describe('ROTypeListComponent', () => {
  let component: ROTypeListComponent;
  let fixture: ComponentFixture<ROTypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ROTypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ROTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
