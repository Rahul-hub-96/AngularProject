import { TestBed } from '@angular/core/testing';

import { PlaceorderserviceService } from './placeorderservice.service';

describe('PlaceorderserviceService', () => {
  let service: PlaceorderserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaceorderserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
