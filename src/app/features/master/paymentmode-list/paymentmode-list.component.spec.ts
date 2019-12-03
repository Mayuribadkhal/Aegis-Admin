import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentmodeListComponent } from './paymentmode-list.component';

describe('PaymentmodeListComponent', () => {
  let component: PaymentmodeListComponent;
  let fixture: ComponentFixture<PaymentmodeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentmodeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentmodeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
