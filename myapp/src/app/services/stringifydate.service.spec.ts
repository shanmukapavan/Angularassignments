import { TestBed } from '@angular/core/testing';

import { StringifydateService } from './stringifydate.service';

describe('StringifydateService', () => {
  let service: StringifydateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StringifydateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
