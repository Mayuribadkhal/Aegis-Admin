import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCunsumComponent } from './client-cunsum.component';

describe('ClientCunsumComponent', () => {
  let component: ClientCunsumComponent;
  let fixture: ComponentFixture<ClientCunsumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientCunsumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientCunsumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
