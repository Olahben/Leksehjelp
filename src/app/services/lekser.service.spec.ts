import { TestBed } from '@angular/core/testing';

import { LekserService } from './lekser.service';

describe('LekserService', () => {
  let service: LekserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LekserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
