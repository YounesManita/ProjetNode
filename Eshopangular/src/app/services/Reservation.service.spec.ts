import { TestBed } from '@angular/core/testing';

import { reservationservice } from './reservation.service';

describe('TutorialService', () => {
  let service: reservationservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(reservationservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
