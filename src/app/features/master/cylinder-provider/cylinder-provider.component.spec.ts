import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CylinderProviderComponent } from './cylinder-provider.component';

describe('CylinderProviderComponent', () => {
  let component: CylinderProviderComponent;
  let fixture: ComponentFixture<CylinderProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CylinderProviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CylinderProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
