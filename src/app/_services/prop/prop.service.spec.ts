import { TestBed } from '@angular/core/testing';

import { PropService } from './prop.service';

describe('PropsService', () => {
  let service: PropService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
