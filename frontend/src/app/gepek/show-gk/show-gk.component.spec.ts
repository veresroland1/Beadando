import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowGkComponent } from './show-gk.component';

describe('ShowGkComponent', () => {
  let component: ShowGkComponent;
  let fixture: ComponentFixture<ShowGkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowGkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowGkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
