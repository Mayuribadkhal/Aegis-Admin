import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmTypeListComponent } from './firm-type-list.component';

describe('FirmTypeListComponent', () => {
  let component: FirmTypeListComponent;
  let fixture: ComponentFixture<FirmTypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirmTypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirmTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
