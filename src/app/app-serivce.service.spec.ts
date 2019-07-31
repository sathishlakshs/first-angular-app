import { TestBed } from '@angular/core/testing';

import { AppSerivceService } from './app-serivce.service';

describe('AppSerivceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppSerivceService = TestBed.get(AppSerivceService);
    expect(service).toBeTruthy();
  });
});
