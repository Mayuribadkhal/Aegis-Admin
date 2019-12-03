import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusMappingListComponent } from './status-mapping-list.component';

describe('StatusMappingListComponent', () => {
  let component: StatusMappingListComponent;
  let fixture: ComponentFixture<StatusMappingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusMappingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusMappingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
