import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CylinderProviderListComponent } from './cylinder-provider-list.component';

describe('CylinderProviderListComponent', () => {
  let component: CylinderProviderListComponent;
  let fixture: ComponentFixture<CylinderProviderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CylinderProviderListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CylinderProviderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
