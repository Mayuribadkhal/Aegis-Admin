import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaneelPartnerListComponent } from './chaneel-partner-list.component';

describe('ChaneelPartnerListComponent', () => {
  let component: ChaneelPartnerListComponent;
  let fixture: ComponentFixture<ChaneelPartnerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChaneelPartnerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaneelPartnerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
