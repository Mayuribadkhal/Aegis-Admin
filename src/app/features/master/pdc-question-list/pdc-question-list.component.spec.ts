import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdcQuestionListComponent } from './pdc-question-list.component';

describe('PdcQuestionListComponent', () => {
  let component: PdcQuestionListComponent;
  let fixture: ComponentFixture<PdcQuestionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdcQuestionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdcQuestionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
