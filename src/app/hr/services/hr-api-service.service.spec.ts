import { TestBed } from '@angular/core/testing';

import { HrApiServiceService } from './hr-api-service.service';

describe('HrApiServiceService', () => {
  let service: HrApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HrApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
