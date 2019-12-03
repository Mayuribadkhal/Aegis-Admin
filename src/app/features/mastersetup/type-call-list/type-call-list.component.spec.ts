import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeCallListComponent } from './type-call-list.component';

describe('TypeCallListComponent', () => {
  let component: TypeCallListComponent;
  let fixture: ComponentFixture<TypeCallListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeCallListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeCallListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
