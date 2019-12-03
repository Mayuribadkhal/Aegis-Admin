import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaneelPartnerComponent } from './chaneel-partner.component';

describe('ChaneelPartnerComponent', () => {
  let component: ChaneelPartnerComponent;
  let fixture: ComponentFixture<ChaneelPartnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChaneelPartnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaneelPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
