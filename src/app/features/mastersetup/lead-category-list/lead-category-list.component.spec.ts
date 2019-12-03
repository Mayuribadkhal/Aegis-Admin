import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadCategoryListComponent } from './lead-category-list.component';

describe('LeadCategoryListComponent', () => {
  let component: LeadCategoryListComponent;
  let fixture: ComponentFixture<LeadCategoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadCategoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
