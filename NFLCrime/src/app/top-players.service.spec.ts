import { TestBed } from '@angular/core/testing';

import { TopPlayersService } from './top-players.service';

describe('TopPlayersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TopPlayersService = TestBed.get(TopPlayersService);
    expect(service).toBeTruthy();
  });
});
