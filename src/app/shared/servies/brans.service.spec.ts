import { TestBed } from '@angular/core/testing';

import { BransService } from './brans.service';

describe('BransService', () => {
  let service: BransService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BransService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
