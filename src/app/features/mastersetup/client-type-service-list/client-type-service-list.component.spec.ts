import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientTypeServiceListComponent } from './client-type-service-list.component';

describe('ClientTypeServiceListComponent', () => {
  let component: ClientTypeServiceListComponent;
  let fixture: ComponentFixture<ClientTypeServiceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientTypeServiceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientTypeServiceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
