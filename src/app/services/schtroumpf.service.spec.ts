import { TestBed } from '@angular/core/testing';

import { SchtroumpfService } from './schtroumpf.service';

describe('SchtroumpfService', () => {
  let service: SchtroumpfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchtroumpfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
