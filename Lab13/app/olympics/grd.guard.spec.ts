import { TestBed, async, inject } from '@angular/core/testing';

import { GrdGuard } from './grd.guard';

describe('GrdGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GrdGuard]
    });
  });

  it('should ...', inject([GrdGuard], (guard: GrdGuard) => {
    expect(guard).toBeTruthy();
  }));
});
