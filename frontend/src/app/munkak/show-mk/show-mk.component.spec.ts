import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMkComponent } from './show-mk.component';

describe('ShowMkComponent', () => {
  let component: ShowMkComponent;
  let fixture: ComponentFixture<ShowMkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
