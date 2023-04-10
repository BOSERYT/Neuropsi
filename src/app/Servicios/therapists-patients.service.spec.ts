import { TestBed } from '@angular/core/testing';

import { TherapistsPatientsService } from './therapists-patients.service';

describe('TherapistsPatientsService', () => {
  let service: TherapistsPatientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TherapistsPatientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
