import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedPatientListComponent } from './assigned-patient-list.component';

describe('AssignedPatientListComponent', () => {
  let component: AssignedPatientListComponent;
  let fixture: ComponentFixture<AssignedPatientListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignedPatientListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedPatientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
