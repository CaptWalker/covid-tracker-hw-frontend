import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientPhysicalHealthComponent } from './patient-physical-health.component';

describe('PatientPhysicalHealthComponent', () => {
  let component: PatientPhysicalHealthComponent;
  let fixture: ComponentFixture<PatientPhysicalHealthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientPhysicalHealthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientPhysicalHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
