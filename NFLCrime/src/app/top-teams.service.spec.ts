import { TestBed } from '@angular/core/testing';

import { TopTeamsService } from './top-teams.service';

describe('TopTeamsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TopTeamsService = TestBed.get(TopTeamsService);
    expect(service).toBeTruthy();
  });
});
