import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientTypeServiceComponent } from './client-type-service.component';

describe('ClientTypeServiceComponent', () => {
  let component: ClientTypeServiceComponent;
  let fixture: ComponentFixture<ClientTypeServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientTypeServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientTypeServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
