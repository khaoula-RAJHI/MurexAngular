import { TestBed } from '@angular/core/testing';

import { FiAdminService } from './fi-admin.service';

describe('FiAdminService', () => {
  let service: FiAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
