import { TestBed } from '@angular/core/testing';

import { StatusPatientsService } from './status-patients.service';

describe('StatusPatientsService', () => {
  let service: StatusPatientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatusPatientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
