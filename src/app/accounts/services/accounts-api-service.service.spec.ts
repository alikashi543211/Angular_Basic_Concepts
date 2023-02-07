import { TestBed } from '@angular/core/testing';

import { AccountsApiServiceService } from './accounts-api-service.service';

describe('AccountsApiServiceService', () => {
  let service: AccountsApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountsApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
