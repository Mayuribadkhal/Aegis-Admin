import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportmodeListComponent } from './transportmode-list.component';

describe('TransportmodeListComponent', () => {
  let component: TransportmodeListComponent;
  let fixture: ComponentFixture<TransportmodeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportmodeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportmodeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
