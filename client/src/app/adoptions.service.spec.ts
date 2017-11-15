import { TestBed, inject } from '@angular/core/testing';

import { AdoptionsService } from './adoptions.service';

describe('AdoptionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdoptionsService]
    });
  });

  it('should be created', inject([AdoptionsService], (service: AdoptionsService) => {
    expect(service).toBeTruthy();
  }));
});
