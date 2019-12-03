import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributorTypeListComponent } from './distributor-type-list.component';

describe('DistributorTypeListComponent', () => {
  let component: DistributorTypeListComponent;
  let fixture: ComponentFixture<DistributorTypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributorTypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributorTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
