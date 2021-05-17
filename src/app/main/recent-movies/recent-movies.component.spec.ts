import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginatePipe, PaginationService } from 'ngx-pagination';

import { RecentMoviesComponent } from './recent-movies.component';

describe('RecentMoviesComponent', () => {
  let component: RecentMoviesComponent;
  let fixture: ComponentFixture<RecentMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecentMoviesComponent, PaginatePipe],
      providers: [PaginationService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should be create', () => {
    expect(component).toBeTruthy();
  });
  it('should not to be null', () => {
    expect(component.sort()).not.toBeNull();
  });
  it('should return array', () => {
    expect(component.sort()).toHaveSize(component.movieList.length);
  });
});
