import { TestBed } from '@angular/core/testing';

import { DecoratorConceptServiceService } from './decorator-concept-service.service';

describe('DecoratorConceptServiceService', () => {
  let service: DecoratorConceptServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DecoratorConceptServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
