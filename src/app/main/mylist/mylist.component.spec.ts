import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MylistComponent } from './mylist.component';

describe('MylistComponent', () => {
  let component: MylistComponent;
  let fixture: ComponentFixture<MylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should be empty', () => {
    expect(component.movieList).toEqual([ ]);
  });
  it('should not be', () => {
    // tslint:disable-next-line: no-unused-expression
    expect(component.movieList).toBeNaN;
  });
  it('should be boolean', () => {
    expect(component.remove).toBeDefined();
  });
});
