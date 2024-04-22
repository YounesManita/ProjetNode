import { TestBed } from '@angular/core/testing';

import { Salleservice } from './Salle.service';

describe('TutorialService', () => {
  let service: Salleservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Salleservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
