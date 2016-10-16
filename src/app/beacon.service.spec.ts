/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BeaconService } from './beacon.service';

describe('Service: Beacon', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeaconService]
    });
  });

  it('should ...', inject([BeaconService], (service: BeaconService) => {
    expect(service).toBeTruthy();
  }));
});
