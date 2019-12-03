import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmTypeComponent } from './firm-type.component';

describe('FirmTypeComponent', () => {
  let component: FirmTypeComponent;
  let fixture: ComponentFixture<FirmTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirmTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirmTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
