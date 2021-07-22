import { TestBed } from '@angular/core/testing';

import { UpdateDescriptionService } from '../services/update-description.service';

describe('UpdateDescriptionService', () => {
  let service: UpdateDescriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateDescriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
