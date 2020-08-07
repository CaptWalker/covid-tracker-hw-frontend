import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDashboardDataComponent } from './patient-dashboard-data.component';

describe('PatientDashboardDataComponent', () => {
  let component: PatientDashboardDataComponent;
  let fixture: ComponentFixture<PatientDashboardDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientDashboardDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDashboardDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
