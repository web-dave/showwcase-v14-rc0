import { TestBed } from '@angular/core/testing';

import { WodennService } from './wodenn.service';

describe('WodennService', () => {
  let service: WodennService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WodennService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
