import { TestBed } from '@angular/core/testing';

import { LicenseplateService } from './licenseplate.service';

describe('LicenseplateService', () => {
  let service: LicenseplateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LicenseplateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
