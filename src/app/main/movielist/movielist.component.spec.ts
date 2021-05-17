import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovielistComponent } from './movielist.component';

describe('MovielistComponent', () => {
  let component: MovielistComponent;
  let fixture: ComponentFixture<MovielistComponent>;
  const mockmovieList = [{
    name: 'A Mock',
    image: '../../../../assets/a.jpg',
    genre: ['Action', 'Comedy'],
    language: 'English',
    releasedon: '03/24/2020'
  },
  {
    name: 'B Mock',
    image: '../../../../assets/fast.jpg',
    genre: ['Action', 'Comedy'],
    language: 'English',
    releasedon: '03/22/2020'
  },
  {
    name: 'C Mock',
    image: '../../../../assets/fast1.jpg',
    genre: ['Action', 'Comedy'],
    language: 'English',
    releasedon: '03/20/2020'
  },
  {
    name: 'D Mock',
    image: '../../../../assets/blade.jpg',
    genre: ['Action', 'Comedy'],
    language: 'English',
    releasedon: '03/27/2020'
  },
  {
    name: 'E mock',
    image: '../../../../assets/daredevil.jpg',
    genre: ['Action', 'Comedy'],
    language: 'English',
    releasedon: '03/30/2020'
  },
  {
    name: 'F Mock',
    image: '../../../../assets/black.jpg',
    genre: ['Action', 'Comedy'],
    language: 'English',
    releasedon: '05/12/2020'
  },
  {
    name: 'G Mock',
    image: '../../../../assets/b.jpg',
    genre: ['Action', 'Comedy'],
    language: 'English',
    releasedon: '03/20/2020'
  },
  {
    name: 'H Mock',
    image: '../../../../assets/avenger.jpg',
    genre: ['Action', 'Comedy'],
    language: 'English',
    releasedon: '03/27/2020'
  }
  ];
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovielistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovielistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should contain', () => {
    expect(component.getMovies()).toEqual(mockmovieList);
  });
});
