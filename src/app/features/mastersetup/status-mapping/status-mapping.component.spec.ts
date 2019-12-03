import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusMappingComponent } from './status-mapping.component';

describe('StatusMappingComponent', () => {
  let component: StatusMappingComponent;
  let fixture: ComponentFixture<StatusMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
