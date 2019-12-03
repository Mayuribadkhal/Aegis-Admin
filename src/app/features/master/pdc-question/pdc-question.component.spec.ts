import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdcQuestionComponent } from './pdc-question.component';

describe('PdcQuestionComponent', () => {
  let component: PdcQuestionComponent;
  let fixture: ComponentFixture<PdcQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdcQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdcQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
