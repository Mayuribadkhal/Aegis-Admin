import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpTypeListComponent } from './sp-type-list.component';

describe('SpTypeListComponent', () => {
  let component: SpTypeListComponent;
  let fixture: ComponentFixture<SpTypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpTypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
