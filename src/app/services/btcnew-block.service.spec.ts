import { TestBed, inject } from '@angular/core/testing';

import { BtcnewBlockService } from './btcnew-block.service';

describe('BtcnewBlockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BtcnewBlockService]
    });
  });

  it('should be created', inject([BtcnewBlockService], (service: BtcnewBlockService) => {
    expect(service).toBeTruthy();
  }));
});
