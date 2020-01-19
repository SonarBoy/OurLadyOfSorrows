import { TestBed } from '@angular/core/testing';

import { RosaryServiceService } from './rosary-service.service';

describe('RosaryServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RosaryServiceService = TestBed.get(RosaryServiceService);
    expect(service).toBeTruthy();
  });
});
