import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnassignedPatientListComponent } from './unassigned-patient-list.component';

describe('UnassignedPatientListComponent', () => {
  let component: UnassignedPatientListComponent;
  let fixture: ComponentFixture<UnassignedPatientListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnassignedPatientListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnassignedPatientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
