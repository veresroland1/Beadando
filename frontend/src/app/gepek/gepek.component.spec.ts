import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GepekComponent } from './gepek.component';

describe('GepekComponent', () => {
  let component: GepekComponent;
  let fixture: ComponentFixture<GepekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GepekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GepekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
