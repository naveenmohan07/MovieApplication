import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';

import { MovieTileComponent } from './movie-tile.component';

describe('MovieTileComponent', () => {
  let component: MovieTileComponent;
  let fixture: ComponentFixture<MovieTileComponent>;
  const RouterSpy = jasmine.createSpyObj(
    'Router',
    ['navigate']
  );
  const ActivatedRouteSpy = {
    snapshot: {
      paramMap: convertToParamMap({
        some: 'some',
        else: 'else',
      })
    }
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieTileComponent],
      providers: [{ provide: Router, useValue: RouterSpy },
      { provide: ActivatedRoute, useValue: ActivatedRouteSpy}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
