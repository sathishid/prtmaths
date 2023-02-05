import { TestBed } from '@angular/core/testing';

import { AddSubServiceService } from './add-sub-service.service';

describe('AddSubServiceService', () => {
  let service: AddSubServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddSubServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
