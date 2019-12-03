import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryByVolumeComponent } from './category-by-volume.component';

describe('CategoryByVolumeComponent', () => {
  let component: CategoryByVolumeComponent;
  let fixture: ComponentFixture<CategoryByVolumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryByVolumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryByVolumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
