import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributorTypeComponent } from './distributor-type.component';

describe('DistributorTypeComponent', () => {
  let component: DistributorTypeComponent;
  let fixture: ComponentFixture<DistributorTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributorTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributorTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
