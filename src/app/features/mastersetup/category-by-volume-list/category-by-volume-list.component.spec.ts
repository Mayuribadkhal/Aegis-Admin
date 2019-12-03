import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryByVolumeListComponent } from './category-by-volume-list.component';

describe('CategoryByVolumeListComponent', () => {
  let component: CategoryByVolumeListComponent;
  let fixture: ComponentFixture<CategoryByVolumeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryByVolumeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryByVolumeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
