import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMunComponent } from './show-mun.component';

describe('ShowMunComponent', () => {
  let component: ShowMunComponent;
  let fixture: ComponentFixture<ShowMunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMunComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
