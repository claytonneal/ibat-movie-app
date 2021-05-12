import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovielistingComponent } from './movielisting.component';

describe('MovielistingComponent', () => {
  let component: MovielistingComponent;
  let fixture: ComponentFixture<MovielistingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovielistingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovielistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
