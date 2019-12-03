import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractualListComponent } from './contractual-list.component';

describe('ContractualListComponent', () => {
  let component: ContractualListComponent;
  let fixture: ComponentFixture<ContractualListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractualListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractualListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
