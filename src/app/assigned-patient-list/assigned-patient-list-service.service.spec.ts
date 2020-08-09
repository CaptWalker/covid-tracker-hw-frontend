import { TestBed } from '@angular/core/testing';

import { AssignedPatientListService } from './assigned-patient-list-service.service';

describe('AssignedPatientListServiceService', () => {
  let service: AssignedPatientListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssignedPatientListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
