import { TestBed } from '@angular/core/testing';

import { RoleTherapistsService } from './role-therapists.service';

describe('RoleTherapistsService', () => {
  let service: RoleTherapistsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoleTherapistsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
