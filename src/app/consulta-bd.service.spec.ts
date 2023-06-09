import { TestBed } from '@angular/core/testing';

import { ConsultaBDService } from './consulta-bd.service';

describe('ConsultaBDService', () => {
  let service: ConsultaBDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultaBDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
