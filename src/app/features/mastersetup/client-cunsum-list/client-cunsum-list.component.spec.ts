import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCunsumListComponent } from './client-cunsum-list.component';

describe('ClientCunsumListComponent', () => {
  let component: ClientCunsumListComponent;
  let fixture: ComponentFixture<ClientCunsumListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientCunsumListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientCunsumListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
